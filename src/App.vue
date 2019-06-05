<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <!-- ICONS -->
    <div style="background: rgb(223, 223, 223, 0.9); border-radius: 6px; ">
      <div style="margin-left: 6px">
        <br />
        <button
          style="cursor: pointer;  background: transparent; border-radius: 6px; border: solid 1px"
          @click="webBlue()"
        >
          <a href="#">
            <!-- <icon-base width="30" height="30" icon-name="Connect" icon-color="black"> -->
            <icon-base width="30" height="30" icon-name="Connect">
              <icon-connect />
            </icon-base>
          </a>
        </button>

        <button
          style="margin-left: 8px; background: transparent; border-radius: 6px; border: solid 1px "
        >
          <a href="#">
            <icon-base
              width="30"
              height="30"
              icon-name="Disconnect"
              icon-color="grey"
            >
              <icon-disconnect />
            </icon-base>
          </a>
        </button>

        <button
          style="margin-left: 36px; cursor: pointer;  background: transparent;  border-radius: 6px; border: solid 1px"
        >
          <a href="#">
            <icon-base width="30" height="30" icon-name="Left/Right">
              <icon-left />
            </icon-base>
          </a>
        </button>
        <button
          style="margin-left: 0px; cursor: pointer;  background: transparent;  border-radius: 6px; border: solid 1px"
        >
          <a href="#">
            <icon-base
              width="30"
              height="30"
              icon-name="Left/Right"
              icon-color="grey"
            >
              <icon-right />
            </icon-base>
          </a>
        </button>

        <button
          style="margin-left: 36px; cursor: pointer;  background: transparent;  border-radius: 6px; border: solid 1px"
        >
          <a href="#">
            <icon-base width="30" height="30" icon-name="??">
              <icon-square />
            </icon-base>
          </a>
        </button>

        <button
          style="margin-left: 36px; cursor: pointer;  background: transparent;  border-radius: 6px; border: solid 1px"
        >
          <a href="#">
            <icon-base width="30" height="30" icon-name="Plot">
              <icon-play />
            </icon-base>
          </a>
        </button>

        <button
          style="margin-left: 0px; cursor: pointer;  background: transparent;  border-radius: 6px; border: solid 1px"
        >
          <a href="#">
            <icon-base width="30" height="30" icon-name="Pause">
              <icon-pause />
            </icon-base>
          </a>
        </button>

        <button
          style="margin-left: 0px; cursor: pointer;  background: transparent;  border-radius: 6px; border: solid 1px"
          @click="record_event()"
        >
          <a href="#">
            <icon-base
              width="30"
              height="30"
              icon-name="Record"
              icon-color="red"
            >
              <icon-record />
            </icon-base>
          </a>
        </button>

        <button
          style="margin-left: 0px; cursor: pointer;  background: transparent;  border-radius: 6px; border: solid 1px"
        >
          <a href="#">
            <icon-base width="30" height="30" icon-name="Stop">
              <icon-stop />
            </icon-base>
          </a>
        </button>

        <button
          style="margin-left: 36px; cursor: pointer;  background: transparent;  border-radius: 6px; border: solid 1px"
        >
          <a href="#">
            <icon-base width="30" height="30" icon-name="Inflate Bladder">
              <icon-inflate />
            </icon-base>
          </a>
        </button>

        <button
          style="margin-left: 0px; cursor: pointer;  background: transparent;  border-radius: 6px; border: solid 1px"
        >
          <a href="#">
            <icon-base width="30" height="30" icon-name="Deflate Bladder">
              <icon-deflate />
            </icon-base>
          </a>
        </button>

        <button
          style="margin-left: 36px; cursor: pointer;  background: transparent;  border-radius: 6px; border: solid 1px"
        >
          <a href="#">
            <icon-base width="30" height="30" icon-name="Open Valve">
              <icon-openvalve />
            </icon-base>
          </a>
        </button>

        <button
          style="margin-left: 0px; cursor: pointer;  background: transparent;  border-radius: 6px; border: solid 1px"
        >
          <a href="#">
            <icon-base width="30" height="30" icon-name="Close Valve">
              <icon-closevalve />
            </icon-base>
          </a>
        </button>

        <button
          style="margin-left: 32px; cursor: pointer;  background: transparent;  border-radius: 6px; border: solid 1px"
        >
          <a href="#">
            <icon-base width="30" height="30" icon-name="Settings">
              <icon-settings />
            </icon-base>
          </a>
        </button>

        <button
          style="margin-left: 32px; cursor: pointer;  background: transparent;  border-radius: 6px; border: solid 1px"
        >
          <a href="#">
            <icon-base width="30" height="30" icon-name="Help">
              <icon-help />
            </icon-base>
          </a>
        </button>
        <br />
        <br />
      </div>
    </div>

    <!-- CHART -->

    <div>
      <!-- <line-back class ="layer1" ref="lineBack" :chart-data="chartBackData"></line-back> -->

      <div class="container_root">
        <div class="layer1_root">
          <div class="container_row">
            <line-back
              class="layer1"
              ref="lineBack"
              :chart-data="chartBackData"
            ></line-back>

            <line-chart
              class="layer2"
              ref="line"
              :chart-data="datacollection"
            ></line-chart>
          </div>
        </div>
        <div class="layer2_root" style="border: 1px solid black">
          <p>Left/Right</p>
        </div>
      </div>
    </div>
    <button @click="fillData()">Randomize</button>
    <br />
    <br />

    <!-- TINKER BUTTONS HERE  -->

    <div class="hello" style="border: 1px solid black">
      <h3>Tinkering controls</h3>

      <button @click="webBlue()">Click</button>
      <button @click="onStopButtonClick()">Stop</button>
      <button @click="lightOn()">LED on</button>
      <button @click="lightOff()">LED off</button>
      <button @click="readKnob()">Knob</button>
      <p>data: {{ connection_info.notification }} potValue: {{ potValue }}</p>
      <p>knobValue computed: {{ knobValue }}</p>
      <hr />
      <button @click="off = !off">toggle</button>
      {{ off }}
      <button @click="record_event()">Record</button>
      {{ record }}
      <br />
      <br />
      POTVALUE: {{ potValue }} data points {{ datapoints.length }}
      <br />
      <br />
      <button @click="addData()">Add data</button>
      <br />
      <br />
      <select v-model="selected">
        <option
          v-for="option in options"
          v-bind:key="option.index"
          v-bind:value="option.value"
          >{{ option.text }}</option
        >
      </select>
      <span>Selected: {{ selected }}</span>

      <br />
      <br />
      <select v-model="intervalSelected">
        <option
          v-for="option in intervalOptions"
          v-bind:key="option.index"
          v-bind:value="option.value"
          >{{ option.text }}</option
        >
      </select>
      <span>Selected: {{ intervalSelected }}</span>
      <hr />
      <button @click="onClick()">Click</button>
      <button @click="onStopButtonClick()">Stop</button>
      <button @click="lightOn()">LED on</button>
      <button @click="lightOff()">LED off</button>
      <button @click="readKnob()">Knob</button>
      <p>data: {{ data }} testN: {{ testN.substring(0, 3) }}</p>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
export default {
  data() {
    return {
      data: [],
      testN: "",
      connection_info: {
        bluetooth_found: true,
        // bluetooth_address: "",
        //bluetooth_channel: "",
        bluetooth_address: "00:21:13:01:FE:18",
        bluetooth_channel: 1,
        bluetooth_connected: false,
        inflate: true,
        notification: ""
      },
      disconnect: false,
      selected: 30,
      options: [
        {
          text: "Every 1000ms",
          value: 1000
        },
        {
          text: "Every 500ms",
          value: 500
        },
        {
          text: "Every 100ms",
          value: 100
        },
        {
          text: "Every 80ms",
          value: 80
        },
        {
          text: "Every 60ms",
          value: 60
        },
        {
          text: "Every 50ms",
          value: 50
        },
        {
          text: "Every 40ms",
          value: 40
        },
        {
          text: "Every 30ms",
          value: 30
        },
        {
          text: "Every 25ms",
          value: 25
        },
        {
          text: "Every 10ms",
          value: 10
        }
      ],
      intervalSelected: 30000,
      intervalOptions: [
        {
          text: "10 seconds",
          value: 10000
        },
        {
          text: "30 seconds",
          value: 30000
        },
        {
          text: "60 seconds",
          value: 60000
        }
      ],
      // end of time interval data
      toggles: {
        pause: false,
        randomise: false
      },
      pause: false,
      test: {},
      test2: [],
      realoptions: null,
      realtimedata: {
        datasets: [
          {
            label: "",
            backgroundColor: "",
            data: []
          },
          {
            label: "",
            backgroundColor: "",
            data: []
          }
        ]
      },
      datacollection: {
        labels: [],
        datasets: [
          {
            label: "",
            backgroundColor: "",
            data: []
          },
          {
            label: "",
            backgroundColor: "",
            data: []
          }
        ]
      },
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
      },

      posts: [],
      off: false,
      ledstatus: false,
      portstest: {
        port0: "/dev/ttyACM0",
        port1: "/dev/ttyUSB0"
      },
      connected: false,
      ports: [],
      potValue: 500,
      record: false,
      recording: 0,
      timer: "",
      x: -1,
      myChar: ""
    };
  },

  mounted() {
    this.fillData();
    this.fillData_real();
    //this.bluetoothTest();
    //var myCharacteristic;
  },

  computed: {
    datapoints() {
      let result = [];
      let n = this.intervalSelected / this.selected;

      for (var i = 0; i <= n; i++) {
        result.push(i);
      }

      return result;
    },

    knobValue() {
      if (this.connection_info.notification) {
        //this.potValue = this.connection_info.notification.substring(0, 3);
        return this.connection_info.notification.substring(0, 3);
      } else {
        return 10;
      }
    }
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

                //console.log(value);
                vm.connection_info.notification = value;
                // if(value.length>3){
                //    vm.potValue = value
                // }

                // TODO::
              }
            );
          });
        })
        .catch(error => {
          console.log("Argh! " + error);
        });
    },

    webBlue() {
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
          this.myChar = myCharacteristic;
          return myCharacteristic.startNotifications().then(_ => {
            console.log("> Notifications started");

            myCharacteristic.addEventListener(
              "characteristicvaluechanged",
              function handleNotifications(event) {
                let value = new TextDecoder().decode(event.target.value);

                //console.log(value);
                vm.connection_info.notification = value;
                // if(value.length>3){
                //    vm.potValue = value
                // }

                // TODO::
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
    },

    fillData() {
      let randomdata = {
        //labels: this.newLabels(),
        labels: this.datapoints, // corresponds to x-axis
        //labels: [0, 1, 2, 3, 4],
        //labels: ["0s", "1s", "2", "3", "4", "5"],
        datasets: [
          {
            label: "Arch Height",
            backgroundColor: "rgb(66, 164, 244, 0.2)",
            // fill: false,

            lineTension: 0,
            //showLine: false,

            data: []
          },
          {
            label: "Raise",
            backgroundColor: "rgb(166, 164, 244, 0.5)",
            fill: false,

            lineTension: 0,
            borderColor: "rgb(166, 164, 244, 0.5)",
            //borderWidth: 6,
            // showLine: false,

            data: [
              //0,
              //1024,
              { x: 333, y: 250 },
              { x: 666, y: 750 }

              // this.getRandomInt(),
              // this.getRandomInt(),
              // this.getRandomInt()
            ]
          }
        ]
      };
      this.datacollection = randomdata;
      //  this.dataobject = this.datacollection;
    },

    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },

    addData() {
      let point = this.getRandomInt();

      this.$refs.line.$data._chart.config.data.datasets[0].data.push(point);

      this.$refs.line.$data._chart.update();
      console.log(
        this.$refs.line.$data._chart.config.data.datasets[0].data.length
      );

      //this.$refs.line.test();

      //this.$refs.line.$data._chart.update();
    },

    record_event() {
      this.record = !this.record; // toggles record state

      if (this.record === true) {
        let vm = this;
        this.timer = setInterval(function() {
          //let point = vm.potValue;
          let point = vm.connection_info.notification.substring(0, 3);
          let start = -1;

          if (
            vm.$refs.line.$data._chart.config.data.datasets[0].data.length <
            vm.datapoints.length
          ) {
            start = start + 1;
            vm.$refs.line.$data._chart.config.data.datasets[0].data.push({
              x: start,
              y: point
            });
            vm.$refs.line.$data._chart.update();
            // console.log(
            //   vm.$refs.line.$data._chart.config.data.datasets[0].data.length
            // );
          } else {
            vm.$refs.line.$data._chart.config.data.datasets[0].data = [
              {
                x: 0,
                y: point
              }
            ];
            vm.$refs.line.$data._chart.update();
          }
        }, vm.selected);
      } else {
        clearInterval(this.timer);
      }
    },

    //used for realtime chart
    fillData_real() {
      let randomdata = {
        //labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: "Dataset 1",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            lineTension: 0,
            //borderDash: [8, 4],
            //fill: false,
            data: []
          },
          {
            label: "Dataset 2",
            borderColor: "rgb(54, 162, 235)",
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            lineTension: 0,
            data: []
          }
        ]
      };

      var pot = this.potValue;

      let options = {
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [
            {
              type: "realtime",
              display: true,
              realtime: {
                refresh: 1000,
                duration: 60000,
                ttl: 90000,
                pause: "",
                onRefresh: function(chart) {
                  chart.data.datasets.forEach(function(dataset) {
                    //
                    // // Array.prototype.push.apply(chart.data.datasets[0].data, data);
                    // dataset.data.push({
                    //   x: Date.now(),
                    //   y: 0
                    // });
                    // chart.update({
                    //   preservation: true
                    // });
                  });
                },

                delay: 500
              }
            }
          ]
        },

        plugins: {
          streaming: {
            // per-chart option
            frameRate: 30 // chart is drawn 30 times every second
          }
        }
      };

      this.realtimedata = randomdata;
      this.realoptions = options;
      //  this.dataobject = this.datacollection;
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
