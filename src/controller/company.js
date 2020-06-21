const Base = require('./base.js');
const { think } = require('thinkjs');

module.exports = class extends Base {
  // indexAction() {
  //   return this.display();
  // }

  async listAction() {
    if (this.isPost) {
      let data = await this.model('company').select();
      return this.success(data);
    } else {
      return this.json(null);
    }
  }

  async delectAction(){
    let model = this.model('company');
    let id = this.get('id');
    await model.where({id: id}).delete();
  }

  async addAction() {
    let data = this.post();
    data.name = this.get('name');
    data.id = this.get('id');
    data.isCustomer = this.get('isCustomer');
    try {
      //保存
     res = await this.model('company').add(data).catch(err => {
       return think.isError(err) ? err : new Error(err);
     });
   } catch (e) {
     return this.fail(1000, e);
   }
    
    // if (think.isEmpty(data.id)) {
     
    //   let res=null;
    //   try {
    //      //保存
    //     res = await this.model('company').add(data).catch(err => {
    //       return think.isError(err) ? err : new Error(err);
    //     });
    //   } catch (e) {
    //     return this.fail(1000, e);
    //   }

    //   if (think.isError(res)) {
    //     return this.fail(1000, res.message);
    //   }
    //   if (res) {
    //     this.success(true);
    //   } else {
    //     this.success(true);
    //   }
    // } else {
    //   //更新
    //   let res = await this.model('thinkjsplus_logger').update(data);
    //   if (res) {
    //     this.success(true);
    //   } else {
    //     this.success(true);
    //   }
    // }
  }
};
