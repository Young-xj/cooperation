webpackJsonp([5],{MHGx:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("TVmP"),a=i("iyCB"),n=i.n(a),o=i("DZOf"),l=i("Ui/T"),r={components:{Footer:s.a},data:function(){return{test_1:n.a,search:"",activeName:"今日未完成",score:["10","10"],task_time:{whole:60,current:15},checked:!1,pid:this.$route.params.pid,planInfo:{},page:0,count:0,comments:[],dialogVisible:!1,startTime:"",friends:[],pickerOptions:{disabledDate:function(t){return t.getTime()<=Date.now()}},user:{}}},methods:{handleClick:function(t){console.log(t.name)},getPlan:function(){var t=this;Object(o.b)("/api/plan/find",{filter:{_id:this.pid}}).then(function(e){t.planInfo=e.data[0],console.log(e),t.count=t.planInfo.days})},getComment:function(){var t=this;Object(o.b)("/api/notification/find",{filter:{plan_id:this.pid}}).then(function(e){t.comments=e.data})},toLeft:function(){this.page>0&&(this.page=this.page-1)},toRight:function(){this.page<this.count-1&&(this.page=this.page+1)},createTask:function(t){var e=this;if(""!=this.startTime){var i=new Date,s=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();console.log(s),Object(o.b)("/api/task/create",{uid:t,pid:this.pid,start:this.startTime}).then(function(i){if(console.log(i),e.dialogVisible=!1,0!=i.code)e.$message({message:"您已经有此任务！",type:"warning"});else{e.$message({message:"创建成功！",type:"success"});var s={};s.sender=e.user._id,s.receiver=t,s.message=e.user.nickname+" 邀请你加入了计划";var a=new Date;s.time=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()+"-"+a.getHours()+":"+a.getMinutes(),s.is_read=!1,s.type="plan",Object(o.b)("/api/notification/create",s).then(function(t){console.log(t)})}})}else this.$message({message:"请选择开始日期",type:"warning"})},getFriend:function(){var t=this;Object(l.a)().then(function(e){t.user=e.data;var i=e.data.friend;void 0==i&&(i=[]),Object(o.b)("/api/user/find",{filter:{_id:{$in:i}}}).then(function(e){console.log(e),t.friends=e.data})})},addToDocument:function(){var t=this,e=[];void 0!=this.user.document&&(e=this.user.document),e.indexOf(this.pid)>=0?this.$message({message:"宁已收藏！",type:"warning"}):(e.push(this.pid),this.user.document=e,Object(o.b)("/api/user/"+this.user._id+"/update",this.user).then(function(e){t.$message({message:"收藏成功！",type:"success"})}))}},mounted:function(){this.getPlan(),this.getComment(),this.getFriend()}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-header",{staticStyle:{height:"260px"}},[i("el-row",{staticStyle:{display:"flex","align-items":"center"}},[i("el-col",{attrs:{span:3}},[i("router-link",{attrs:{to:"/task"}},[i("i",{staticClass:"el-icon-arrow-left",staticStyle:{"font-size":"25px",color:"#B8CDE6"}})])],1),t._v(" "),i("el-col",{attrs:{span:20}},[i("h1",[t._v(t._s(t.planInfo.desc))])])],1),t._v(" "),i("el-row",[i("el-image",{staticStyle:{height:"180px"},attrs:{src:t.test_1}})],1)],1),t._v(" "),i("el-main",[i("el-dialog",{attrs:{title:"选择你的好友以及开始日期",visible:t.dialogVisible,width:"90%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-row",[i("el-date-picker",{attrs:{type:"date",format:"yyyy 年 M 月 dd 日","value-format":"yyyy-M-dd",placeholder:"选择日期","picker-options":t.pickerOptions},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}})],1),t._v(" "),i("br"),t._v(" "),t._l(t.friends,function(e){return i("el-row",{key:e._id,staticClass:"small-box",staticStyle:{"background-color":"#fff"}},[i("el-col",{attrs:{span:6}},[i("el-avatar",{attrs:{size:40,icon:"el-icon-user-solid"}})],1),t._v(" "),i("el-col",{attrs:{span:14}},[i("el-row",{staticStyle:{"text-align":"left"}},[t._v(t._s(e.nickname))])],1),t._v(" "),i("el-col",{attrs:{span:4}},[i("el-button",{attrs:{size:"mini",round:""},on:{click:function(i){return t.createTask(e._id)}}},[t._v("选择")])],1)],1)})],2),t._v(" "),i("el-row",[i("el-col",{attrs:{span:8}},[i("h3",[t._v("总时间:"+t._s(t.planInfo.days)+"天")])]),t._v(" "),i("el-col",{attrs:{span:8,offset:8}},[i("h3",[t._v("点赞:151人")])])],1),t._v(" "),i("div",{staticStyle:{margin:"30px"}},[i("el-row",{staticStyle:{"align-items":"center",display:"flex"}},[i("el-col",{attrs:{span:6}},[i("i",{staticClass:"el-icon-arrow-left",staticStyle:{"font-size":"25px",color:"#B8CDE6"},on:{click:t.toLeft}})]),t._v(" "),i("el-col",{attrs:{span:12}},[i("h3",{staticStyle:{margin:"2px"}},[t._v("第"+t._s(t.page+1)+"天安排")])]),t._v(" "),i("el-col",{attrs:{span:6}},[i("i",{staticClass:"el-icon-arrow-right",staticStyle:{"font-size":"25px",color:"#B8CDE6"},on:{click:t.toRight}})])],1),t._v(" "),i("br"),t._v(" "),t._l(t.planInfo.tasks[t.page],function(e,s){return i("div",{key:s},[i("el-row",{staticClass:"row-text-left"},[i("h4",{staticStyle:{margin:"5px"}},[t._v(t._s(s))])]),t._v(" "),i("el-row",{staticClass:"row-text-left"},[i("el-col",{attrs:{offset:2}},[t._v("\n            "+t._s(e)+"\n          ")])],1)],1)}),t._v(" "),i("br"),t._v(" "),i("div",[i("el-row",[i("el-col",{attrs:{span:6}},[i("el-button",{staticStyle:{"background-color":"#C1D3E8"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("发起任务")])],1),t._v(" "),i("el-col",{attrs:{span:6,offset:8}},[i("el-button",{staticStyle:{"background-color":"#C1D3E8"},on:{click:t.addToDocument}},[t._v("加入收藏")])],1)],1)],1)],2),t._v(" "),i("el-divider"),t._v(" "),i("div",[i("el-row",{staticStyle:{"text-align":"left"}},[i("el-col",{attrs:{span:8}},[i("h3",{staticStyle:{"margin-top":"0px"}},[t._v("热门评论:")])]),t._v(" "),i("el-col",{attrs:{span:8,offset:8}},[i("h5",{staticStyle:{"margin-top":"4px",color:"grey"}},[t._v("查看更多")])])],1),t._v(" "),t._l(t.comments,function(e){return i("div",{key:e._id,staticClass:"big-box",staticStyle:{"text-align":"left"}},[t._v("\n           "+t._s(e.sender)+":\n        "),i("el-row",[i("el-col",{attrs:{span:20,offset:3}},[t._v(t._s(e.message))])],1)],1)})],2)],1),t._v(" "),i("br"),t._v(" "),i("br"),t._v(" "),i("Footer")],1)},staticRenderFns:[]};var d=i("VU/8")(r,c,!1,function(t){i("g0II")},null,null);e.default=d.exports},g0II:function(t,e){}});
//# sourceMappingURL=5.7220888e5794d576841f.js.map