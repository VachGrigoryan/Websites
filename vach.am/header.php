<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php wp_head() ?>
    <title>vach.am</title>
</head>
<body>
<!--Header-->
<header>
    <div class="logo-name">
        <h2><a href="http://localhost/portfolio/"><?php echo get_field('header')['logo']; ?></a></h2>
    </div>
    <div class="page-items">
            <ul class="another-pages">
                <li><a href="http://localhost/portfolio/"><?php echo get_field('header')['pages']['home']; ?></a></li>
                <li><a href=""><?php echo get_field('header')['pages']['about_me']; ?></a></li>
                <li><a href="http://localhost/portfolio/my-works/"><?php echo get_field('header')['pages']['my_works']; ?></a></li>
            </ul>
            <div class="contact-btn">
                <button><?php echo get_field('header')['contact-btn']; ?></button>
            </div>
        </div>
    <div class="burger-icons">
        <img id="open-icon" src="<?php echo get_field('header')['burger_icon']['open-icon']; ?>" alt="">
        <img id="close-icon" src="<?php echo get_field('header')['burger_icon']['close_icon']; ?>" alt="">
    </div>
</header>