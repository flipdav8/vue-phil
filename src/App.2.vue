<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home hey!</router-link>|
      <router-link to="/about">About Phil</router-link>
    </div>
    <router-view/>
    <p>hello</p>
    <button @click="onClick()">Click</button>
    <button @click="onStopButtonClick()">Stop</button>
    <button @click="lightOn()">LED on</button>
    <button @click="lightOff()">LED off</button>
    <button @click="readKnob()">Knob</button>
    <p>data: {{ data }} test: {{ test.substring(0, 3) }}</p>
    <!-- <line-chart class="layer2" ref="line" :chart-data="datacollection"></line-chart> -->
    <line-back class="layer1" ref="lineBack" :chart-data="chartBackData"></line-back>
  </div>
</template>
<!-- eslint-disable -->
<script>
export default {
  data() {
    return {
      data: [],
      test: "",
      myChar: "",
      chartBackData: {
        labels: [0, 5, 10, 15, 20, 25, 30],
        datasets: [
          {
            label: "Arch Height",
            backgroundColor: "transparent",
            showLine: false,
            data: [0, 1024]
          },
          {
            label: "Raise",
            showLine: false,
            backgroundColor: "transparent",
            data: [0, 1024]
          }
        ]
      }
    };
  },
  methods: {
    onClick() {
      let vm = this;
      var serviceUuid = 0xffe0;
      var characteristicUuid = 0xffe1;
      //var serviceUuid = 0x180f;
      //var characteristicUuid = 0x2a19;
      console.log("Requesting Bluetooth Device...");
      //.requestDevice({ acceptAllDevices: true })

      navigator.bluetooth
        .requestDevice({ filters: [{ services: [serviceUuid] }] })
        //.requestDevice({ acceptAllDevices: true, optionalServices: ['battery_service'] })
        .then(device => {
          console.log("Connecting to GATT Server...");
          return device.gatt.connect();
          // device.gatt.connect();
          //console.log("connected");
        })
        .then(server => {
          console.log("connected");
          console.log("Getting Service...");
          return server.getPrimaryService(serviceUuid);
        })
        .then(service => {
          console.log("Getting Characteristic...");
          return service.getCharacteristic(characteristicUuid);
        })
        .then(characteristic => {
          let myCharacteristic = characteristic;
          this.myChar = myCharacteristic;
          return myCharacteristic.startNotifications().then(_ => {
            console.log("> Notifications started");
            myCharacteristic.addEventListener(
              "characteristicvaluechanged",
              function handleNotifications(event) {
                let value = new TextDecoder().decode(event.target.value);

                console.log(value);

                vm.test = value;
              }
            );
          });
        })
        .catch(error => {
          console.log("Argh! " + error);
        });
    },

    onStopButtonClick() {
      if (this.myChar) {
        this.myChar
          .stopNotifications()
          .then(_ => {
            console.log("> Notifications stopped");
            this.myChar.removeEventListener(
              "characteristicvaluechanged",
              function handleNotifications(event) {
                //
              }
            );
          })
          .catch(error => {
            console.log("Argh! " + error);
          });
      }
    },

    lightOn() {
      if (this.myChar) {
        let dataTest = 1;
        this.myChar.writeValue(new TextEncoder().encode(dataTest));
        console.log("out");
      }
    },

    lightOff() {
      if (this.myChar) {
        let dataTest = 0;
        this.myChar.writeValue(new TextEncoder().encode(dataTest));
        console.log("out");
      }
    },

    readKnob() {
      if (this.myChar) {
        let dataTest = 2;
        this.myChar.writeValue(new TextEncoder().encode(dataTest));
        console.log("out");
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.small {
  max-width: 600px;
  margin: 150px auto;
  /* background-color: rgb(100, 100, 100, 0.2); */
}

.container_row {
  display: flex;
  height: 80vh;
  /* width: 80vw; */
}

.layer1 {
  /* height: 130%; */
  width: 100%;
  /* background-color: rgba(255,0,0,0.5);  // red */
}

.layer2 {
  width: 100%;
  margin-left: -100%;
  /* background-color: rgba(0,0,255,0.5);  // blue */
}

.container_root {
  display: flex;
  height: 80vh;
  /* width: 80vw; */
}

.layer1_root {
  /* height: 130%; */
  width: 80%;
  /* background-color: rgba(255,0,0,0.5);  // red */
}

.layer2_root {
  width: 20%;
  /* margin-left: -100%; */
  /* background-color: rgba(0,0,255,0.5);  // blue */
}
/* .button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
} */

a {
  color: black;
}

a:hover {
  color: blue;
}

a:active {
  color: blue;
}
</style>
