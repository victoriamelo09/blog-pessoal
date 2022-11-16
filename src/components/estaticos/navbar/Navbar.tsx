import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import { Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify'


function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token !== '') {
        navbarComponent = <AppBar position="static" style={{ background: '#5F3534' }}>
            <Toolbar variant="dense">
                <Box className='cursor'>
                    <Typography variant="h5" color="inherit">
                        BlogdaVi
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="start">

                    <Box mx={1} className='cursor'>
                        <Link to='/home' className='text-decorator-none'>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Link>
                    </Box>

                    <Box mx={1} className='cursor'>
                        <Link to='/postagens' className='text-decorator-none'>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Link>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Link to='/temas' className='text-decorator-none'>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Link>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Link to='/formularioTema' className='text-decorator-none'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Link>
                    </Box>
                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box>
                </Box>

            </Toolbar>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;