const setup = () => {
    return {
        isOpen: true,
        isMobileLayout: false,
        showNavBg: false,
        isMobile: null,
        linkShow: false,
        tempLink: null,
        setBg() {
            if (!this.isMobileLayout) {
                this.showNavBg = (window.pageYOffset > 20) ? true : false;
            } else {
                this.showNavBg = true;
                if (window.pageYOffset > 50) {
                    this.isMobile = null;
                } else {
                    this.isMobile = this.tempLink;
                }
            }
        },
        checkScreen() {
            if (/android/i.test(navigator.userAgent)) {
                this.isMobile = "https://play.google.com/store/apps/details?id=rb.android.unotrade";
                this.tempLink = "https://play.google.com/store/apps/details?id=rb.android.unotrade";
            } else if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
                this.isMobile = "https://apps.apple.com/id/app/unotrade/id1517185419";
                this.tempLink = "https://apps.apple.com/id/app/unotrade/id1517185419";
            }
        },
        watchScreen() {
            if (window.innerWidth <= 768) {
                this.isOpen = false
                this.isMobileLayout = true
                this.showNavBg = true
                this.checkScreen();
            } else {
                this.isOpen = true
                this.isMobileLayout = false
            }

        },
        openStore() {
            window.open(this.isMobile, '_blank').focus();
        }
    }
}