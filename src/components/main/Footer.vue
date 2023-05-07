<template>
    <footer class="footer">
        <div class="footer__content">
            <div class="footer__logo">
                <img src="@/assets/images/logo.png" alt="logo">
            </div>
        </div>
    </footer>
</template>
<style lang="scss">
    .footer {
        &__content {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 32px 0;
        }
        &__logo {
            max-width: 100px;
        }
    }
</style>