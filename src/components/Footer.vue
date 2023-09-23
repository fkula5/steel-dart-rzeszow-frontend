<template>
    <footer>
        <div class="footer-container">
            <div class="left-footer-container">© 2023 Steel Dart Rzeszów</div>
            <div class="right-footer-container">Created by Michał Płowy, Mariusz Dąbrowski and Filip Kula</div>
        </div>
    </footer>
</template>

<style scoped>
footer{
    background-color: #2e2e2e;
}
.footer-container{
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
}
.left-footer-container, .right-footer-container{
    text-align: center;
}
@media screen and (max-width: 765px) {
    .footer-container{
        flex-direction: column;
        align-items: center;
    }
}
</style>