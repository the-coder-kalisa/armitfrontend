import { Link } from 'react-router-dom'

// material-ui
import { ButtonBase } from '@mui/material'

// project imports
import config from 'config'
import Logo from 'ui-component/extended/Logo'

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({drawn}) => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        <Logo drawn={drawn}/>
    </ButtonBase>
)

export default LogoSection
