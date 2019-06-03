<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home hey!</router-link>|
      <router-link to="/about">About Phil</router-link>
    </div>
    <router-view />
    <p>hello</p>
    <button @click="onClick()">Click</button>
    <p>data: {{ data }} test: {{ test.substring(0, 3) }}</p>
  </div>
</template>
<!-- eslint-disable -->
<script>
export default {
  data() {
    return {
      data: [],
      test: ""
    };
  },
  methods: {
    onClick() {
      let vm = this;
      var serviceUuid = 0xffe0;
      var characteristicUuid = 0xffe1;
      console.log("Requesting Bluetooth Device...");

      navigator.bluetooth
        .requestDevice({ filters: [{ services: [serviceUuid] }] })
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
          return myCharacteristic.startNotifications().then(_ => {
            console.log("> Notifications started");
            myCharacteristic.addEventListener(
              "characteristicvaluechanged",
              function handleNotifications(event) {
                // let value = event.target.value;
                ///let a = [];
                // let b = event.target.value.buffer;
                // Convert raw data bytes to hex values just for the sake of showing something.
                // In the "real" world, you'd use data.getUint8, data.getUint16 or even
                // TextDecoder to process raw data bytes.
                // for (let i = 0; i < value.byteLength; i++) {
                //   a.push(
                //     // "0x" + ("00" + value.getUint8(i).toString(16)).slice(-2)
                //     String.fromCharCode(value.getUint8(i).toString(8))
                //     // new TextDecoder().decode([value.getUint8(i).toString(16)])
                //   );
                // }
                // console.log("> " + a.join(" "));
                //  console.log(value);
                //let c = new TextDecoder().decode(b);

                let value = new TextDecoder().decode(event.target.value);
                //console.log(value);
                // console.log(JSON.parse(c));
                //a.push(c);
                //vm.data = JSON.parse(c).b; // b is the analog value from the potentiometer
                //vm.test = vm.test + value;
                // let knobValue = value.substring(0, 3);
                console.log(value);
                //console.log(knobValue);
                // if (knobValue.length > 0) {
                //   vm.test = knobValue;
                // }

                vm.test = value;

                // let dataBuffer = "";
                // dataBuffer = dataBuffer + value;
                // let start = dataBuffer.indexOf("b");
                // let end = dataBuffer.indexOf("s");
                // let string = dataBuffer.substring(0, 13);
                // console.log(string);

                //vm.test = test;

                // if (dataBuffer.indexOf("/n") != -1) {
                //   try {
                //     let data = dataBuffer;
                //     dataBuffer = "";
                //     console.log(data);
                //     //vm.potValue = JSON.parse(data).bladder;
                //     data = "";
                //   } catch (e) {
                //     if (e instanceof SyntaxError) {
                //       console.log("Syncing");
                //     } else {
                //       //console.log("test");
                //     }
                //   }
                // }
              }
            );
          });
        })
        .catch(error => {
          console.log("Argh! " + error);
        });
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
</style>
