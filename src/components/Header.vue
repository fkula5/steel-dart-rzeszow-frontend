<template>
    <header>
        <div class="wrapper">
            <RouterLink to="/"
                ><svg class="logo" viewBox="0 0 11.224 22.651" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="a">
                            <stop stop-color="#64748b" offset="0" />
                            <stop stop-color="#fff" offset=".5" />
                            <stop stop-color="#64748b" offset="1" />
                        </linearGradient>
                        <linearGradient id="b">
                            <stop stop-color="#fff" offset="0" />
                            <stop stop-color="#94a3b8" offset="1" />
                        </linearGradient>
                        <linearGradient id="c">
                            <stop stop-color="#991b1b" offset="0" />
                            <stop stop-color="#dc2626" offset="1" />
                        </linearGradient>
                    </defs>
                    <path d="M1.471 4.4h.8v4.4h-.8z" fill="url(#a)" />
                    <path d="M5.212 4.4h.8v4.4h-.8z" fill="url(#a)" />
                    <path d="M8.953 4.4h.8v4.4h-.8z" fill="url(#a)" />
                    <path d="M1.871 0 .201 1.213v2.064l1.67 2.299z" fill="url(#b)" />
                    <path d="m1.871 0 1.67 1.213v2.064l-1.67 2.299z" fill="url(#c)" />
                    <path d="m5.612 0-1.67 1.213v2.064l1.67 2.299z" fill="url(#b)" />
                    <path d="m5.612 0 1.67 1.213v2.064l-1.67 2.299z" fill="url(#c)" />
                    <path d="m9.353 0-1.67 1.213v2.064l1.67 2.299z" fill="url(#b)" />
                    <path d="m9.353 0 1.67 1.213v2.064l-1.67 2.299z" fill="url(#c)" />
                    <path
                        d="M5.572 22.651c2.427-1.79 5.65.29 5.65-3.068L11.224 8.8H.007L0 19.583c0 3.358 3.422 1.237 5.572 3.068z"
                        fill="#13539e"
                    />
                    <path
                        d="m4.333 19.285 3.468.012-1.721-4.014 4.01 1.627.005-4.19-4.003 1.622 1.756-3.87-4.258-.002 1.677 3.873-3.984-1.65v4.317l3.984-1.74-1.727 4.014z"
                        fill="#fff"
                    /></svg
            ></RouterLink>

            <nav>
                <RouterLink to="/">Strona główna</RouterLink>
                <RouterLink to="/">Dodaj spotkanie</RouterLink>
                <RouterLink to="/login">Zaloguj</RouterLink>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    background-color: #2e2e2e;
}
.wrapper {
    width: 100%;
    height: 100px;
    max-height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}
.logo {
    max-height: 80px;
    width: 100%;
}
nav {
    display: flex;
    gap: 10px;
}
nav > a {
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
}
</style>
