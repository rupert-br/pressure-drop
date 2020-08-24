var app = new Vue({
  el:"#setup",
  data: {
    pipes: [
      {
        type: 'pipe',
        name: '',
        level_low: '',
        level_center: ''
      }
    ],
    fittings: [
     {
       type: 'fitting',
       zeta: ''
     } 
    ]
  },
  methods: {
    addNewPipeForm () {
      this.pipes.push({
        name: '',
        level_low: '',
        level_center: ''
      })
    },
    deletePipeForm (index) {
      this.pipes.splice(index, 1)
    },
    addNewFittingForm () {
      this.fittings.push({
        name: '',
        unit: ''
      })
    },
    deleteFittingForm (index) {
      this.fittings.splice(index, 1)
    }
  }
})
