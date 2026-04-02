#!/bin/bash
BASE="https://pv.corretorvencedor.club/wp-content/uploads"
DIR="public/images"
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
REF="https://pv.corretorvencedor.club/"

dl() {
  curl -s -L -H "User-Agent: $UA" -H "Referer: $REF" -o "$DIR/$2" "$1" && echo "OK: $2" || echo "FAIL: $2"
}

# Carousel
dl "$BASE/2025/10/1-2.webp" "img-1.webp"
dl "$BASE/2025/10/2-2.webp" "img-2.webp"
dl "$BASE/2025/10/3-2.webp" "img-3.webp"
dl "$BASE/2025/10/4.webp" "img-4.webp"
dl "$BASE/2025/10/5.webp" "img-5.webp"
dl "$BASE/2025/10/6.webp" "img-6.webp"
dl "$BASE/2025/10/7.webp" "img-7.webp"
dl "$BASE/2025/10/8.webp" "img-8.webp"
dl "$BASE/2025/10/9.webp" "img-9.webp"
dl "$BASE/2025/10/10.webp" "img-10.webp"
dl "$BASE/2025/10/11.webp" "img-11.webp"

# About
dl "$BASE/elementor/thumbs/Design-sem-nome-3-rebijamfl08k8vy85v2jctdnyhu7z8890mz9v727uo.webp" "about-main.webp"
dl "$BASE/elementor/thumbs/1-rdzghtlqz0564qtky5zskcl8lft0ax6odq8j4h3t4w.png" "about-1.png"
dl "$BASE/elementor/thumbs/3-rebifn11078f3h9dia6rnql4sjuu1lptujnaoghc1s.png" "about-3.png"
dl "$BASE/elementor/thumbs/1-rebifgg5oczeu7ixkpcdoa8wmur9jpzphn2wbir39c.png" "about-1b.png"

# Experiencia
dl "$BASE/2025/10/Gemini_Generated_Image_la8z7lla8z7lla8z.webp" "experiencia-boat.webp"
dl "$BASE/elementor/thumbs/DSC00871-re64f0t4kxyr48ppc7pxlet6d96145zrns9ooxlfq0.webp" "experiencia-dsc.webp"

# Design/testimonial images
dl "$BASE/elementor/thumbs/Design-sem-nome-2-1-re87e4cqplil6gnhpa2bnapq87vusy1gp3n9z864ho.webp" "design-2-1.webp"
dl "$BASE/elementor/thumbs/Design-sem-nome-2-re877mb22i0mzz3nfu6nxjdq95xngzg15qn0unmln8.webp" "design-2.webp"
dl "$BASE/elementor/thumbs/Design-sem-nome-1-re877cwoexfsp1nmhektr23t0s1rq0mecc6dx0lg4w.webp" "design-1.webp"

# Mentor
dl "$BASE/2025/11/Altemir-683x1024.webp" "altemir.webp"

# Logos
dl "$BASE/2025/11/logo-gigantes.svg" "logo-gigantes-new.svg"
dl "$BASE/2025/11/logo-ibraciv-2.svg" "logo-ibraciv.svg"

echo "All downloads complete!"
