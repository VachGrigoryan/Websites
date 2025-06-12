<?php wp_footer() ?>
<!--Footer-->
<footer>
    <div class="email-title">
        <p><?php echo get_field('footer')['title_footer']; ?></p>
        <a href=""><?php echo get_field('footer')['email']; ?></a>
    </div>
    <div class="footer-items">
        <div class="logo-infos">
            <div class="footer-logo">
                <h3><a href="http://localhost/portfolio/"><?php echo get_field('header')['logo']; ?></a></h3>
            </div>
            <div class="location">
                <p><?php echo get_field('footer')['location']; ?></p>
            </div>
            <div class="number-platforms">
                <div class="phone-number">
                    <p><?php echo get_field('footer')['phone']; ?></p>
                </div>
                <div class="platforms-icons">
                    <a href=""><img src="<?php echo get_field('footer')['linkedin_icon']; ?>" alt=""></a>
                    <a href=""><img src="<?php echo get_field('footer')['instagram_icon']; ?>" alt=""></a>
                    <a href="">   <img src="<?php echo get_field('footer')['telegram_icon']; ?>" alt=""></a>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p><?php echo get_field('footer')['copyright'];?></p>
        </div>
    </div>
</footer>
</body>
</html>