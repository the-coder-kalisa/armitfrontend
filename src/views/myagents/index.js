import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// material-ui
import { Grid, Box, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// project imports
import MainCard from 'ui-component/cards/MainCard'
import ItemCard from 'ui-component/cards/ItemCard'
import { gridSpacing } from 'store/constant'
import WorkflowEmptySVG from 'assets/images/workflow_empty.svg'
import { StyledButton } from 'ui-component/button/StyledButton'
import LoginDialog from 'ui-component/dialog/LoginDialog'

// API
import chatflowsApi from 'api/chatflows'

// Hooks
import useApi from 'hooks/useApi'

// const
import { baseURL } from 'store/constant'

// icons
import { IconPlus } from '@tabler/icons'



import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

// ==============================|| CHATFLOWS ||============================== //

const Chatflows = () => {
    const navigate = useNavigate()
    const theme = useTheme()
    const customization = useSelector((state) => state.customization)

    const [isLoading, setLoading] = useState(true)
    const [images, setImages] = useState({})
    const [loginDialogOpen, setLoginDialogOpen] = useState(false)
    const [loginDialogProps, setLoginDialogProps] = useState({})

    const getAllChatflowsApi = useApi(chatflowsApi.getAllChatflows)

    const onLoginClick = (username, password) => {
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
        navigate(0)
    }

    const addNew = () => {
        navigate('/canvas')
    }

    const goToCanvas = (selectedChatflow) => {
        navigate(`/canvas/${selectedChatflow.id}`)
    }

    useEffect(() => {
        getAllChatflowsApi.request()


    }, [])

    useEffect(() => {
        if (getAllChatflowsApi.error) {
            if (getAllChatflowsApi.error?.response?.status === 401) {
                setLoginDialogProps({
                    title: 'Login',
                    confirmButtonName: 'Login'
                })
                setLoginDialogOpen(true)
            }
        }
    }, [getAllChatflowsApi.error])

    useEffect(() => {
        setLoading(getAllChatflowsApi.loading)
    }, [getAllChatflowsApi.loading])

    useEffect(() => {
        if (getAllChatflowsApi.data) {
            try {
                const chatflows = getAllChatflowsApi.data
                const images = {}
                for (let i = 0; i < chatflows.length; i += 1) {
                    const flowDataStr = chatflows[i].flowData
                    const flowData = JSON.parse(flowDataStr)
                    const nodes = flowData.nodes || []
                    images[chatflows[i].id] = []
                    for (let j = 0; j < nodes.length; j += 1) {
                        const imageSrc = `${baseURL}/api/v1/node-icon/${nodes[j].data.name}`
                        if (!images[chatflows[i].id].includes(imageSrc)) {
                            images[chatflows[i].id].push(imageSrc)
                        }
                    }
                }
                setImages(images)
            } catch (e) {
                console.error(e)
            }
        }
    }, [getAllChatflowsApi.data])


    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const modalStyle = {
        width: '70%',
        height: '70%',
        margin: 'auto',
        borderRadius: '10px'
    };

    const modalcontentStyle = {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6E6E6',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column'
    };

    const customButtonStyles = {
        backgroundColor: '#757575', 
        color: '#ffffff', 
        '&:hover': {
            backgroundColor: '#757575', 
        },
        borderRadius: '30px',
    };

    const modalButtonStyles = {
        backgroundColor: '#757575', 
        color: '#ffffff', 
        '&:hover': {
            backgroundColor: '#757575', 
        },
        borderRadius: '30px',
        width: "50%",
        height: '70px',
        marginBottom: "50px"
    };

    return (
        <MainCard sx={{ background: customization.isDarkMode ? theme.palette.common.black : '' }}>
            <div style={{ width: '100%' }}>
                <IconButton color="primary" aria-label="Add" sx={customButtonStyles} style={{ float: 'right', marginLeft: "10px" }}>
                    <AddIcon />
                </IconButton>
                <Button variant="contained" sx={customButtonStyles} onClick={() => handleOpen()} style={{ float: 'right' }}>
                    New Agent
                </Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                sx={modalStyle}
            >
                <Box sx={modalcontentStyle}>
                    <Button variant="contained" sx={modalButtonStyles} onClick={() => navigate('/canvas')} >
                        <Typography id="modal-title" variant="h1" component="h2" style={{ color: 'white' }}>
                            Simple Canvas
                        </Typography>
                    </Button>
                    <Button variant="contained" sx={modalButtonStyles} onClick={() => handleOpen()} >
                        <Typography id="modal-title" variant="h1" component="h2" style={{ color: 'white' }}>
                            Advanced Canvas
                        </Typography>
                    </Button>
                </Box>
            </Modal>
            <Grid container spacing={gridSpacing}>
                {/* {!isLoading &&
                    getAllChatflowsApi.data &&
                    getAllChatflowsApi.data.map((data, index) => (
                        <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
                            <ItemCard onClick={() => goToCanvas(data)} data={data} images={images[data.id]} />
                        </Grid>
                    ))} */}
            </Grid>
            {!isLoading && (!getAllChatflowsApi.data || getAllChatflowsApi.data.length === 0) && (
                <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} flexDirection='column'>
                    <Box sx={{ p: 2, height: 'auto' }}>
                        <img style={{ objectFit: 'cover', height: '30vh', width: 'auto' }} src={WorkflowEmptySVG} alt='WorkflowEmptySVG' />
                    </Box>
                    <div>No Chatflows Yet</div>
                </Stack>
            )}
            <LoginDialog show={loginDialogOpen} dialogProps={loginDialogProps} onConfirm={onLoginClick} />
        </MainCard>
    )
}

export default Chatflows
