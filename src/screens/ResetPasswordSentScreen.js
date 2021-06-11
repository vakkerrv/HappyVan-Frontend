import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function ResetPasswordScreen({location:{state:{email}}}) {
    return (
        <Container>
            <h1>Ссылка для обновления пароля отправлена на почту {email}</h1>
            <Link to='/'>Вернуться на главную</Link>
        </Container>
    )
}

export default ResetPasswordScreen
