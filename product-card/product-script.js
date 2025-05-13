function updateHeaderOffset() {
    const headerBar = document.querySelector('.header_bar_fix');
        const secondaryBar = document.querySelector('.box_header_secondary_bar');
        if (headerBar && secondaryBar) {
            const height = headerBar.offsetHeight;
            secondaryBar.style.marginTop = height + 'px';
        }
}
    
    window.addEventListener('resize', updateHeaderOffset);
    window.addEventListener('load', updateHeaderOffset);

//icons_white

document.addEventListener("DOMContentLoaded", function () {
    const contrastButtons = document.querySelectorAll(".wcag .contrast span");

    // Карта иконок: оригинал → белая версия
    const iconMap = {
        // SOCIAL MEDIA ICONS
        "/social_media_icons/brand-icon-charity-8245bf0e20.svg": "/social_media_icons_white/brand-icon-charity_white.svg",
        "/social_media_icons/information-social-appgallery-bfd6ae9245.svg": "/social_media_icons_white/information-social-appgallery_white.svg",
        "/social_media_icons/information-social-appstore-a920eef37a.svg": "/social_media_icons_white/information-social-appstore_white.svg",
        "/social_media_icons/information-social-facebook-1b4340531f.svg": "/social_media_icons_white/information-social-facebook_white.svg",
        "/social_media_icons/information-social-instagram-c5df47cc57.svg": "/social_media_icons_white/information-social-instagram_white.svg",
        "/social_media_icons/information-social-linkedin-8f60937a9f.svg": "/social_media_icons_white/information-social-linkedin_white.svg",
        "/social_media_icons/information-social-pinterest-a224b1e154.svg": "/social_media_icons_white/information-social-pinterest_white.svg",
        "/social_media_icons/information-social-playstore-4b97bd12ca.svg": "/social_media_icons_white/information-social-playstore_white.svg",
        "/social_media_icons/information-social-youtube-314653d2bb.svg": "/social_media_icons_white/information-social-youtube_white.svg",

        // PROMOTED ICONS
        "/promoted_icons/u_briefcase-alt.svg": "/promoted_icons_white/u_briefcase-alt_white.svg",
        "/promoted_icons/u_fire_percentage.svg": "/promoted_icons_white/u_fire_percentage_white.svg",
        "/promoted_icons/u_medal.svg": "/promoted_icons_white/u_medal_white.svg",
        "/promoted_icons/u_umbrella.svg": "/promoted_icons_white/u_umbrella_white.svg",

        // NAVIGATION ICONS
        "/navigation_icon/action-common-three-dots-8d6d31cbb0.svg": "/navigation_icon_white/action-common-three-dots-white.svg",
        "/navigation_icon/brand-subbrand-smart-d8bfa93f10.svg": "/navigation_icon_white/brand-subbrand-smart_white.svg",
        "/navigation_icon/fi_heart.svg": "/navigation_icon_white/fi_heart_white.svg",
        "/navigation_icon/u_angle-down.svg": "/navigation_icon_white/u_angle-down_white.svg",
        "/navigation_icon/u_bell.svg": "/navigation_icon_white/u_bell_white.svg",
        "/navigation_icon/u_comments-alt.svg": "/navigation_icon_white/u_comments-alt_white.svg",
        "/navigation_icon/u_shopping-bag.svg": "/navigation_icon_white/u_shopping-bag_white.svg",
        "/navigation_icon/u_truck.svg": "/navigation_icon_white/u_truck_white.svg"
    };

    // Обратная карта: белая версия → оригинал
    const reverseIconMap = Object.fromEntries(
        Object.entries(iconMap).map(([color, white]) => [white, color])
    );

    function switchToWhiteIcons() {
        document.querySelectorAll("img").forEach(img => {
            const src = img.getAttribute("src");
            if (iconMap[src]) {
                img.setAttribute("src", iconMap[src]);
            }
        });
    }

    function switchToColorIcons() {
        document.querySelectorAll("img").forEach(img => {
            const src = img.getAttribute("src");
            if (reverseIconMap[src]) {
                img.setAttribute("src", reverseIconMap[src]);
            }
        });
    }

    contrastButtons.forEach(button => {
        button.addEventListener("click", () => {
            const contrastClass = "contrast-op-" + button.className.match(/\d+/)[0];
            document.body.className = contrastClass;

            if (contrastClass === "contrast-op-2" || contrastClass === "contrast-op-4") {
                switchToWhiteIcons();
            } else {
                switchToColorIcons();
            }
        });
    });
});