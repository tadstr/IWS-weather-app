import React from 'react'
import "./profile.style.scss"

const Profile = () => {
  return (
    <section className="profile">
      <div className="info">
        <div class="container">
          <div class="coast">
            <div class="wave-rel-wrap">
              <div class="wave"></div>
            </div>
          </div>
          <div class="coast delay">
            <div class="wave-rel-wrap">
              <div class="wave delay"></div>
            </div>
          </div>
          <div class="text text-h">H</div>
          <div class="text text-o">O</div>
          <div class="text text-a">A</div>
          <div class="text text-n">N</div>
          <div class="text text-g">G</div>
          <div class="text text-a2">A</div>
          <div class="text text-n2">N</div>
        </div>
        <div className="detail">~ Front-end Developer - 4C17 ~</div>
      </div>
    </section>

  )
}

export default Profile