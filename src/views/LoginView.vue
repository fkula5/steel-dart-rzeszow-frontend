<script setup></script>
<template>
    <main>
        <div class="img-container">
            <img src="../assets/images/hiro-winner.jpg" alt="" />
        </div>
        <div class="login-container">
            <div class="email-input-container">
                <label for="email">Email</label><br />
                <input type="email" name="email" id="" />
            </div>
            <div class="password-input-container">
                <label for="password">Hasło</label><br />
                <input type="password" name="password" id="" />
            </div>
            <button>Zaloguj</button>
        </div>
    </main>
</template>

<style scoped>
main {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 1000px;
    gap: 30px;
}
.img-container,
.login-container {
    min-width: 300px;
    width: 600px;
    max-width: 600px;
}
img {
    width: 100%;
    border-radius: 25px;
}
.login-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
}
input {
    background-color: #2e2e2e;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 25px;
    width: 100%;
}
button {
    background-color: #8d7162;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 25px;
    width: 100%;
}
</style>
