<template>
  <div class="player-container">
    <div class="player-header desktop">
      <span>
        <strong>Sales & Marketing Planning</strong>
        - October 30, 2018
      </span>
    </div>
    <div class="player-time desktop">
      <span>1:30 / 10:00</span>
    </div>
    <div class="player-line desktop">
      <div class="player-progress"></div>
      <icon class="map-pin-icon"
            scale="1.5"
            style="left: 60%"
            name="map-pin" />
      <icon class="map-pin-icon"
            scale="1.5"
            style="left: 65%"
            name="map-pin" />
      <icon class="map-pin-icon"
            scale="1.5"
            style="left: 43%"
            name="map-pin" />
      <icon class="map-pin-icon"
            scale="1.5"
            style="left: 20%"
            name="map-pin" />
      <icon class="map-pin-icon"
            scale="1.5"
            style="left: 70%"
            name="map-pin" />
    </div>
    <div class="player-actions desktop">
      <div class="public">
        <input type="checkbox"
               name=""
               id="">
        <span>public</span>
      </div>
      <div class="download">
        <span>download pdf</span>
        <icon name="arrow-down" />
      </div>
      <div @click="$emit('share')"
           class="share">
        <span>share</span>
        <icon name="share" />
      </div>
    </div>

    <div class="player-actions mobile">
      <div class="public">
        <input type="checkbox"
               name=""
               id="">
        <span>public</span>
      </div>
      <div class="download">
        <span>download pdf</span>
        <icon name="arrow-down" />
      </div>
      <div class="share">
        <span>share</span>
        <icon name="share" />
      </div>
    </div>
    <div class="player-header mobile">
      <span>
        <strong>Sales & Marketing Planning</strong>
        - October 30, 2018
      </span>
    </div>
    <div class="player-time mobile">
      <span>1:30 / 10:00</span>
    </div>
    <div class="player-line mobile">
      <div class="player-progress"></div>
      <icon class="map-pin-icon"
            scale="1.5"
            style="left: 60%"
            name="map-pin" />
      <icon class="map-pin-icon"
            scale="1.5"
            style="left: 65%"
            name="map-pin" />
      <icon class="map-pin-icon"
            scale="1.5"
            style="left: 43%"
            name="map-pin" />
      <icon class="map-pin-icon"
            scale="1.5"
            style="left: 20%"
            name="map-pin" />
      <icon class="map-pin-icon"
            scale="1.5"
            style="left: 70%"
            name="map-pin" />
    </div>

  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
@media only screen and (min-width: 1151px) {
  .mobile {
    display: none !important;
  }
  .player-progress {
    width: 60% !important;
  }
}
@media only screen and (min-width: 705px) and (max-width: 1150px) {
  .mobile {
    display: none !important;
  }
  .player-line {
    width: 100% !important;
  }
  .player-progress {
    width: 60% !important;
  }
  .player-actions {
    width: 100% !important;
    margin: 0 !important;
    justify-content: flex-end !important;
  }
}
@media only screen and (max-width: 704px) {
  .player-container {
    display: flex;
    flex-direction: column;
  }
  .player-line {
    width: 100% !important;
  }
  .player-progress {
    width: 60% !important;
  }
  .player-actions {
    order: 0 !important;
    width: 100% !important;
    margin: 0 !important;
    justify-content: center !important;
    margin-bottom: 30px !important;
    margin-top: 12px !important;
  }
  .player-time {
    margin-bottom: 40px !important;
  }
  .desktop {
    display: none !important;
  }
}
/* .player-container {
  height: 96px;
} */
.player-header {
  margin-bottom: 7px;
}
.player-header span {
  color: #a5a5a5;
  font-family: "Acumin Pro";
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.69px;
  line-height: 19px;
}
.player-header strong {
  color: #323232;
  font-family: "Acumin Pro";
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.69px;
  line-height: 19px;
}
.player-time {
  color: #2a2929;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  margin-bottom: 17px;
}
.player-line {
  position: relative;
  height: 5px;
  width: 824px;
  border-radius: 5px;
  background-color: #e1dfdf;
  margin-bottom: 17px;
}
.player-progress {
  height: 5px;
  width: 341px;
  border-radius: 5px 0 0 5px;
  background-color: #2e7eed;
  margin-bottom: 17px;
}
.map-pin-icon {
  position: absolute;
  color: #7ed321;
  top: -24px;
}
.player-actions {
  display: flex;
  align-items: center;
  margin-left: 538px;
  color: #a5a5a5;
  font-family: "Helvetica Neue";
  font-size: 11px;
  font-weight: bold;
  line-height: 13px;
  text-transform: uppercase;
}
.player-actions div {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.player-actions .public input {
  margin-right: 8px;
  border: 2px solid #c7c7c7;
  border-radius: 1px;
}
.player-actions .download span {
  margin-right: 8px;
}
.player-actions .share span {
  margin-right: 8px;
}
</style>
