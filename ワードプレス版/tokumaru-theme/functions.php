<?php
/**
 * 徳丸商会 LP テーマ functions
 */

// CSS/JS の読み込み
function tokumaru_enqueue_assets() {
    $ver = '1.0.0';

    // メインCSS（Tailwind ビルド済み）
    wp_enqueue_style(
        'tokumaru-main',
        get_template_directory_uri() . '/assets/css/main.css',
        array(),
        $ver
    );

    // Google Fonts
    wp_enqueue_style(
        'tokumaru-fonts',
        'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Zen+Old+Mincho:wght@700;900&display=swap',
        array(),
        null
    );

    // Alpine.js（メインJS）
    wp_enqueue_script(
        'tokumaru-main',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        $ver,
        true
    );
}
add_action('wp_enqueue_scripts', 'tokumaru_enqueue_assets');

// フォントプリコネクト
function tokumaru_preconnect() {
    echo '<link rel="preconnect" href="https://fonts.googleapis.com">' . "\n";
    echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' . "\n";
}
add_action('wp_head', 'tokumaru_preconnect', 1);

// テーマサポート
function tokumaru_setup() {
    add_theme_support('title-tag');
    add_theme_support('html5', array('search-form', 'gallery', 'caption'));
}
add_action('after_setup_theme', 'tokumaru_setup');

// 不要なWordPressデフォルト出力を削除（LP用に軽量化）
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wp_shortlink_wp_head');
remove_action('wp_head', 'rest_output_link_wp_head');
remove_action('wp_head', 'wp_oembed_add_discovery_links');
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

// アセットパスのヘルパー
function tokumaru_asset($path) {
    return get_template_directory_uri() . '/assets/' . ltrim($path, '/');
}
