var app = new Vue({
  el:"#setup",
  data: {
    scope: null,
    design: null,
    center_points: '',
    list: {
      'Parameter screening': [ { size:'full_fact', name:'Full-Factorial' }, { size:'frac_fact', name:'Fractional-Factorial' }, { size:'plackett_burman', name:'Plackett-Burman' } ],
      'Optimization': [{size:'box_behnken', name:'Box-Behnken'}, {size:'central_composite', name:'Central Composite'}]
    },
    factors: [
      {
        name: '',
        level_low: '',
        level_center: '',
        level_high: '',
        unit: ''
      }
    ],
    responses: [
     {
       name: '',
       unit: ''
     } 
    ]
  },
  methods: {
    addNewFactorForm () {
      this.factors.push({
        name: '',
        level_low: '',
        level_center: '',
        level_high: '',
        unit: ''
      })
    },
    deleteFactorForm (index) {
      this.factors.splice(index, 1)
    },
    addNewResponseForm () {
      this.responses.push({
        name: '',
        unit: ''
      })
    },
    deleteResponseForm (index) {
      this.responses.splice(index, 1)
    }
  }
})
