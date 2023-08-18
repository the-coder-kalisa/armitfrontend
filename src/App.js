import { useSelector } from 'react-redux'
import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, StyledEngineProvider } from '@mui/material'
import "reactflow/dist/style.css";
// routing
import Routes from 'routes'

// defaultTheme
import themes from 'themes'

// project imports
import NavigationScroll from 'layout/NavigationScroll'

// langflow imports
import { ErrorBoundary } from "react-error-boundary";
import ErrorAlert from 'views/advanced/alerts/error'
import NoticeAlert from "views/advanced/alerts/notice";
import SuccessAlert from "views/advanced/alerts/success";
import CrashErrorComponent from "views/advanced/components/CrashErrorComponent";
import { alertContext } from "views/advanced/contexts/alertContext";
import { locationContext } from "views/advanced/contexts/locationContext";
import { TabsContext } from "views/advanced/contexts/tabsContext";

// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization)

    let { setCurrent, setShowSideBar, setIsStackedOpen } =
        useContext(locationContext);
    let location = useLocation();
    useEffect(() => {
        setCurrent(location.pathname.replace(/\/$/g, "").split("/"));
        setShowSideBar(true);
        setIsStackedOpen(true);
    }, [location.pathname, setCurrent, setIsStackedOpen, setShowSideBar]);
    const { hardReset } = useContext(TabsContext);
    const {
        errorData,
        errorOpen,
        setErrorOpen,
        noticeData,
        noticeOpen,
        setNoticeOpen,
        successData,
        successOpen,
        setSuccessOpen,
    } = useContext(alertContext);

    const [alertsList, setAlertsList] = useState([])

    useEffect(() => {
        // If there is an error alert open with data, add it to the alertsList
        if (errorOpen && errorData) {
            if (
                alertsList.length > 0 &&
                JSON.stringify(alertsList[alertsList.length - 1].data) ===
                JSON.stringify(errorData)
            ) {
                return
            }
            setErrorOpen(false)
            setAlertsList(old => {
                let newAlertsList = [
                    ...old,
                    { type: "error", data: _.cloneDeep(errorData), id: _.uniqueId() }
                ]
                return newAlertsList
            })
        }
        // If there is a notice alert open with data, add it to the alertsList
        else if (noticeOpen && noticeData) {
            if (
                alertsList.length > 0 &&
                JSON.stringify(alertsList[alertsList.length - 1].data) ===
                JSON.stringify(noticeData)
            ) {
                return
            }
            setNoticeOpen(false)
            setAlertsList(old => {
                let newAlertsList = [
                    ...old,
                    { type: "notice", data: _.cloneDeep(noticeData), id: _.uniqueId() }
                ]
                return newAlertsList
            })
        }
        // If there is a success alert open with data, add it to the alertsList
        else if (successOpen && successData) {
            if (
                alertsList.length > 0 &&
                JSON.stringify(alertsList[alertsList.length - 1].data) ===
                JSON.stringify(successData)
            ) {
                return
            }
            setSuccessOpen(false)
            setAlertsList(old => {
                let newAlertsList = [
                    ...old,
                    { type: "success", data: _.cloneDeep(successData), id: _.uniqueId() }
                ]
                return newAlertsList
            })
        }
    }, [
        _,
        errorData,
        errorOpen,
        noticeData,
        noticeOpen,
        setErrorOpen,
        setNoticeOpen,
        setSuccessOpen,
        successData,
        successOpen
    ])

    const removeAlert = id => {
        setAlertsList(prevAlertsList =>
            prevAlertsList.filter(alert => alert.id !== id)
        )
    }

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <div className="flex h-full flex-col">
                        <ErrorBoundary
                            onReset={() => {
                                window.localStorage.removeItem("tabsData")
                                window.localStorage.clear()
                                hardReset()
                                window.location.href = window.location.href
                            }}
                            FallbackComponent={CrashErrorComponent}
                        >
                            <Routes />
                        </ErrorBoundary>
                        <div></div>
                        <div className="app-div" style={{ zIndex: 999 }}>
                            {alertsList.map(alert => (
                                <div key={alert.id}>
                                    {alert.type === "error" ? (
                                        <ErrorAlert
                                            key={alert.id}
                                            title={alert.data.title}
                                            list={alert.data.list}
                                            id={alert.id}
                                            removeAlert={removeAlert}
                                        />
                                    ) : alert.type === "notice" ? (
                                        <NoticeAlert
                                            key={alert.id}
                                            title={alert.data.title}
                                            link={alert.data.link}
                                            id={alert.id}
                                            removeAlert={removeAlert}
                                        />
                                    ) : (
                                        <SuccessAlert
                                            key={alert.id}
                                            title={alert.data.title}
                                            id={alert.id}
                                            removeAlert={removeAlert}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default App
