export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUp = (history) => {
    history.push("/cadastro")
}

export const goToPostDetail = (history, id) => {
    history.push(`detalhes-post/:id`)
}

export const goToPosts = (history) => {
    history.push("/")
}