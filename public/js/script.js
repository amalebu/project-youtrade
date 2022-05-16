const setup = () => {
    return {
        isOpen: true,
        isMobileLayout: false,
        showNavBg: false,
        isMobile: null,
        linkShow: false,
        tempLink: null,
        atElement: 'hero',
        heroOffset: 0,
        askOffset: 0,
        contactOffset: 0,
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
        watchScroll() {
            this.atElement = 'hero';

            if (this.askOffset.offsetTop - window.scrollY < 100 && window.scrollY < this.contactOffset.offsetTop - 100) {
                this.atElement = 'ask'
            };
            if (this.contactOffset.offsetTop - window.scrollY < 100) {
                this.atElement = 'contact'
            };
        },
        goToElement(element) {
            if (element !== 'heroOffset')
                window.scrollTo({ top: element.offsetTop - 40, behavior: 'smooth' });
            else
                window.scrollTo({ top: 0, behavior: 'smooth' });
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
            this.heroOffset = document.getElementById("hero");
            this.askOffset = document.getElementById("ask");
            this.contactOffset = document.getElementById("contact");
            if (window.innerWidth <= 768) {
                this.isOpen = false
                this.isMobileLayout = true
                this.showNavBg = true
                this.checkScreen();
                tns({
                    container: '.main-slider',
                    items: 1,
                    edgePadding: 15,
                    slideBy: 'page',
                    autoplay: true,
                    loop: false,
                    center: true,
                    navPosition: "bottom",
                    autoplayButton: false,
                    autoplayButtonOutput: false,
                    controls: false,
                    nav: true,
                });
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