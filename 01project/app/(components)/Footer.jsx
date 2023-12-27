import React from 'react'

const Footer = () => {
    return (
        <section class="footer">
            <hr />
            <h4>About Us</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
                <br /> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae
                dolorem.
            </p>

            <div class="icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin"></i>
            </div>
            <p>Made with <i class="fas fa-heart"></i> by <a href="#">Sagar Developer</a></p>
            <p>Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights Reserved</p>
        </section>
    )
}

export default Footer