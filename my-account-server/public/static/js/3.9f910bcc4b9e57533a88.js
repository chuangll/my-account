webpackJsonp([3],{595:function(e,t,a){a(623);var o=a(286)(a(628),a(616),null,null);e.exports=o.exports},609:function(e,t,a){t=e.exports=a(590)(),t.push([e.i,".add-expend .el-dialog,.add-member .el-dialog,.add-type .el-dialog{width:420px}","",{version:3,sources:["F:/GitHub/my-account/my-account-web/src/components/income.vue"],names:[],mappings:"AACA,mEACE,WAAa,CACd",file:"income.vue",sourcesContent:["\n.add-expend .el-dialog,.add-type .el-dialog,.add-member .el-dialog{\n  width: 420px;\n}\n"],sourceRoot:""}])},616:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{staticClass:"margin-bottom-20"},[a("el-col",{attrs:{span:12}},[a("h1",{staticClass:"no-margin-top fs35"},[e._v("收入信息"),a("span",{staticClass:"fs16 margin-left-10 success"},[e._v("( 共计收入："+e._s(e.accountTotal)+" 元 )")])])]),e._v(" "),a("el-col",{staticClass:"text-right",attrs:{span:12}},[a("el-radio-group",{attrs:{size:"large",change:"modelChange"},model:{value:e.incomedModel,callback:function(t){e.incomedModel=t},expression:"incomedModel"}},[a("el-radio-button",{attrs:{label:"day"}},[e._v("日")]),e._v(" "),a("el-radio-button",{attrs:{label:"month"}},[e._v("月")]),e._v(" "),a("el-radio-button",{attrs:{label:"year"}},[e._v("年")])],1)],1)],1),e._v(" "),a("div",{staticClass:" block",staticStyle:{padding:"10px",background:"#dedede"}},[a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:"day"==e.incomedModel,expression:"incomedModel=='day'"}],attrs:{type:"daterange",placeholder:"选择日期范围查询"},model:{value:e.searchInfo.date_range,callback:function(t){e.searchInfo.date_range=t},expression:"searchInfo.date_range"}}),e._v(" "),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:"month"==e.incomedModel,expression:"incomedModel=='month'"}],attrs:{type:"month",placeholder:"选择月份"},model:{value:e.searchInfo.date_month,callback:function(t){e.searchInfo.date_month=t},expression:"searchInfo.date_month"}}),e._v(" "),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:"year"==e.incomedModel,expression:"incomedModel=='year'"}],attrs:{type:"year",placeholder:"选择年份"},model:{value:e.searchInfo.date_year,callback:function(t){e.searchInfo.date_year=t},expression:"searchInfo.date_year"}}),e._v(" "),a("el-select",{attrs:{clearable:"",filterable:"",placeholder:"选择类型查询"},model:{value:e.searchInfo.type_id,callback:function(t){e.searchInfo.type_id=t},expression:"searchInfo.type_id"}},e._l(e.typeList,function(e){return a("el-option",{key:e.type_id,attrs:{label:e.type_name,value:e.type_id}})})),e._v(" "),a("el-select",{attrs:{clearable:"",filterable:"",placeholder:"选择收入成员查询"},model:{value:e.searchInfo.member_id,callback:function(t){e.searchInfo.member_id=t},expression:"searchInfo.member_id"}},e._l(e.memberList,function(e){return a("el-option",{key:e.member_id,attrs:{label:e.member_name,value:e.member_id}})})),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.addIncomeFormVisible,expression:"!addIncomeFormVisible"}],staticClass:"floatright fs15",attrs:{type:"success",icon:"plus"},on:{click:e.incomeFormOpen}},[e._v("新增收入")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.addIncomeFormVisible,expression:"addIncomeFormVisible"}],staticClass:"floatright fs15",attrs:{type:"warning",icon:"close"},on:{click:function(t){e.addIncomeFormVisible=!e.addIncomeFormVisible}}},[e._v("取消新增")])],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.addIncomeFormVisible,expression:"addIncomeFormVisible"}],staticStyle:{border:"1px solid #d5d5d5",padding:"20px 10px 0 10px"}},[a("el-form",{ref:"incomeForm",attrs:{model:e.incomeForm,"label-width":"80px",rules:e.incomeRules,inline:!0}},[a("el-form-item",{staticClass:"margin-bottom-10",attrs:{label:"收入日期",prop:"account_date"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.incomeForm.account_date,callback:function(t){e.incomeForm.account_date=t},expression:"incomeForm.account_date"}})],1),e._v(" "),a("el-form-item",{staticClass:"margin-bottom-10",attrs:{label:"收入类型",prop:"type_id"}},[a("el-select",{attrs:{filterable:"",placeholder:"选择类型查询"},model:{value:e.incomeForm.type_id,callback:function(t){e.incomeForm.type_id=t},expression:"incomeForm.type_id"}},e._l(e.typeList,function(e){return a("el-option",{key:e.type_id,attrs:{label:e.type_name,value:e.type_id}})})),e._v(" "),a("el-button",{staticClass:"padding-left-10 padding-right-10 ",staticStyle:{"margin-left":"-5px","border-bottom-left-radius":"0","border-top-left-radius":"0"},attrs:{icon:"plus"},on:{click:e.typeFormOpen}})],1),e._v(" "),a("el-form-item",{staticClass:"no-margin-bottom",attrs:{label:"收入成员"}},[a("el-select",{attrs:{filterable:"",placeholder:"选择成员查询"},model:{value:e.incomeForm.member_id,callback:function(t){e.incomeForm.member_id=t},expression:"incomeForm.member_id"}},e._l(e.memberList,function(e){return a("el-option",{key:e.member_id,attrs:{label:e.member_name,value:e.member_id}})})),e._v(" "),a("el-button",{staticClass:"padding-left-10 padding-right-10 ",staticStyle:{"margin-left":"-5px","border-bottom-left-radius":"0","border-top-left-radius":"0"},attrs:{icon:"plus"},on:{click:e.memberFormOpen}})],1),e._v(" "),a("el-form-item",{staticClass:"margin-bottom-10",attrs:{label:"收入金额",prop:"account_sum"}},[a("el-input",{staticStyle:{width:"194px"},attrs:{type:"number",placeholder:"请填写支出金额"},model:{value:e.incomeForm.account_sum,callback:function(t){e.incomeForm.account_sum=t},expression:"incomeForm.account_sum"}})],1),e._v(" "),a("el-form-item",{staticClass:"margin-bottom-10",attrs:{label:"备注",prop:"account_remark"}},[a("el-input",{staticStyle:{width:"350px"},attrs:{type:"text",placeholder:"请填写备注"},model:{value:e.incomeForm.account_remark,callback:function(t){e.incomeForm.account_remark=t},expression:"incomeForm.account_remark"}})],1),e._v(" "),a("el-form-item",[a("el-button",{staticClass:"margin-left-10",attrs:{type:"success"},nativeOn:{click:function(t){e.incomeSubmit(t)}}},[e._v("提交收入")])],1)],1)],1),e._v(" "),"day"==e.incomedModel?a("div",{staticClass:"margin-top-20"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.expendList,border:""}},[a("el-table-column",{attrs:{prop:"account_date",label:"日期"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type_name",label:"类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"account_sum",label:"金额（元）"}}),e._v(" "),a("el-table-column",{attrs:{prop:"member_name",label:"收入成员"}}),e._v(" "),a("el-table-column",{attrs:{prop:"account_remark",label:"备注"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){e.deleteIncome(t.row.account_id)}}},[e._v("删除")])]}}])})],1),e._v(" "),e.currentPageParams.totalResult>0?a("div",{staticClass:"text-right margin-top-5"},[a("label",{staticClass:"floatleft fs15 margin-top-5"},[e._v("共计收入："),a("span",{staticClass:"fs18",staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.accountTotal)+" 元")])]),e._v(" "),a("el-pagination",{staticClass:"no-padding-right",attrs:{"current-page":e.currentPageParams.currentPage,"page-size":e.currentPageParams.showCount,layout:"total, prev, pager, next",total:e.currentPageParams.totalResult},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPageParams.currentPage=t}}})],1):e._e()],1):e._e(),e._v(" "),"month"==e.incomedModel||"year"==e.incomedModel?a("div",{staticClass:"widget margin-top-20"},[a("div",{staticClass:"widget-body",staticStyle:{"min-height":"360px"}},[e._m(0),e._v(" "),a("div",{staticClass:" margin-top-10 margin-bottom-10",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.monthYearExpendList,border:""}},[a("el-table-column",{attrs:{prop:"account_date",label:"日期"}}),e._v(" "),a("el-table-column",{attrs:{prop:"account_sum",label:"收入金额（元）"}})],1),e._v(" "),e.currentPageParams.totalResult>0?a("div",{staticClass:"text-right margin-top-5"},[a("el-pagination",{staticClass:"no-padding-right",attrs:{"current-page":e.currentPageParams.currentPage,"page-size":e.currentPageParams.showCount,layout:"total, prev, pager, next",total:e.currentPageParams.totalResult},on:{"current-change":e.handleMonthChange,"update:currentPage":function(t){e.currentPageParams.currentPage=t}}})],1):e._e()],1)])]):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.accountTypeList&&e.accountTypeList.length>0,expression:"accountTypeList&&accountTypeList.length>0"}],staticClass:"widget margin-top-10 "},[a("div",{staticClass:"widget-body",staticStyle:{"min-height":"360px"}},[e._m(1),e._v(" "),a("div",{staticClass:" margin-top-10 margin-bottom-10",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.accountTypeList,border:""}},[a("el-table-column",{attrs:{prop:"type_name",label:"类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type_sum",label:"收入金额（元）"}})],1)],1)])]),e._v(" "),a("el-dialog",{staticClass:"add-type",attrs:{title:"新增类型","close-on-click-modal":!1},model:{value:e.typeFormVisible,callback:function(t){e.typeFormVisible=t},expression:"typeFormVisible"}},[a("el-form",{ref:"typeForm",attrs:{model:e.typeForm,rules:e.typeRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"支出类型",prop:"type_name"}},[a("el-input",{staticStyle:{width:"260px"},attrs:{placeholder:"请填写支出类型"},model:{value:e.typeForm.type_name,callback:function(t){e.typeForm.type_name=t},expression:"typeForm.type_name"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.typeFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){e.typeSubmit(t)}}},[e._v("提交")])],1)],1),e._v(" "),a("el-dialog",{staticClass:"add-member",attrs:{title:"新增成员","close-on-click-modal":!1},model:{value:e.memberFormVisible,callback:function(t){e.memberFormVisible=t},expression:"memberFormVisible"}},[a("el-form",{ref:"memberForm",attrs:{model:e.memberForm,rules:e.memberRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"支出成员",prop:"member_name"}},[a("el-input",{staticStyle:{width:"260px"},attrs:{placeholder:"请填写支出成员"},model:{value:e.memberForm.member_name,callback:function(t){e.memberForm.member_name=t},expression:"memberForm.member_name"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.memberFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){e.memberSubmit(t)}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{display:"inline-block",width:"650px"},attrs:{"ng-show":""}},[a("div",{staticStyle:{width:"650px",height:"360px"},attrs:{id:"chartLine"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{display:"inline-block",width:"650px"},attrs:{"ng-show":""}},[a("div",{staticStyle:{width:"600px",height:"360px"},attrs:{id:"myChart"}})])}]}},623:function(e,t,a){var o=a(609);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(591)("2333175b",o,!0)},628:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{searchInfo:{date_range:[this.$moment(new Date).format("YYYY-MM"),new Date],date_month:new Date,date_year:new Date,type_id:null,member_id:null,account_flow:1},incomedModel:"day",incomeFormVisible:!1,addIncomeFormVisible:!1,typeFormVisible:!1,memberFormVisible:!1,addLoading:!1,accountTotal:0,memberList:[],typeList:[],expendList:[],monthYearExpendList:[],accountTypeList:[],incomeForm:{account_date:null,type_id:null,account_sum:null,member_id:null,account_remark:""},incomeRules:{account_date:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],type_id:[{type:"number",required:!0,message:"请选择收入类型",trigger:"change"}],account_sum:[{required:!0,message:"请输入收入金额",trigger:"change"}]},typeForm:{type_name:"",type_flow:0},memberForm:{member_name:""},typeRules:{type_name:[{required:!0,message:"请填写类型名称",trigger:"change"}]},memberRules:{member_name:[{required:!0,message:"请填写成员名称",trigger:"change"}]},currentPageParams:{currentPage:1,showCount:10,totalResult:0},incomeOpenNum:0,typeOpenNum:0,memberOpenNum:0}},methods:{getMemberList:function(){var e=this;this.$http.get(this.config.baseUrl+"member/queryAll",{params:{pageStr:""}}).then(function(t){var a=t.data;0==a.code&&(e.memberList=a.memberList)},function(t){e.memberList=[]})},getTypeList:function(){var e=this;this.$http.get(this.config.baseUrl+"type/queryByFlow",{params:{type_flow:"1"}}).then(function(t){var a=t.data;0==a.code&&(e.typeList=a.typeList)},function(t){e.typeList=[]})},getIncomeList:function(){var e=this,t=null,a="account/queryByMonthOrYear";"day"==e.incomedModel?(a="account/queryAll",t=e.searchInfo.date_range):"month"==e.incomedModel?(t=e.searchInfo.date_month,e.searchInfo.dateType="month"):"year"==e.incomedModel&&(t=e.searchInfo.date_year,e.searchInfo.dateType="year"),e.searchInfo.search_range=null,t&&t.toString().length>0&&("day"==e.incomedModel?null!=t[0]&&null!=t[1]&&(e.searchInfo.search_range={date_begin:e.$moment(t[0]).format("YYYY-MM-DD"),date_end:e.$moment(t[1]).add("day",1).format("YYYY-MM-DD")}):"month"==e.incomedModel?(e.currentPageParams="",e.searchInfo.search_range={date_begin:e.$moment(t).format("YYYY-MM"),date_end:e.$moment(t).add("month",1).format("YYYY-MM")}):"year"==e.incomedModel&&(e.currentPageParams="",e.searchInfo.search_range={date_begin:e.$moment(t).format("YYYY"),date_end:e.$moment(t).add("year",1).format("YYYY")})),e.$http({method:"GET",url:e.config.baseUrl+a,params:{accountStr:e.searchInfo,pageStr:e.currentPageParams}}).then(function(t){var a=t.data;0==a.code&&("day"==e.incomedModel&&a.accountList&&a.accountList.length>0&&a.accountList.forEach(function(t){t.account_date=e.$moment(t.account_date).format("YYYY-MM-DD")}),e.expendList=a.accountList,e.currentPageParams=a.page,e.accountTotal=a.total,e.accountTypeList=a.accountTypeList,e.setChartsPie(a.accountTypeList),"day"!=e.incomedModel&&e.setChartLine(a.accountList),"month"==e.incomedModel?a.accountList&&a.accountList.length>0?(e.currentPageParams={currentPage:1,showCount:10,totalResult:a.accountList.length},a.accountList.length<=10?e.monthYearExpendList=a.accountList:e.monthYearExpendList=a.accountList.slice(0,10)):e.monthYearExpendList=[]:e.monthYearExpendList=a.accountList)},function(t){e.expendList=[]})},deleteIncome:function(e){var t=this;t.$confirm("确定要删除此收入吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.get(t.config.baseUrl+"account/deleteAccount",{params:{account_id:e}}).then(function(e){0==e.data.code?(t.getIncomeList(),t.$message({message:"删除成功！！",type:"success"})):t.$message.error("删除失败！！")},function(e){t.$message.error("删除失败！！")})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},incomeFormOpen:function(){this.addIncomeFormVisible=!0,this.$refs.incomeForm.resetFields(),this.incomeForm={account_date:this.$moment().format("YYYY-MM-DD"),type_id:null,account_sum:null,member_id:null}},typeFormOpen:function(){this.typeFormVisible=!0,this.typeOpenNum++,this.typeOpenNum>1&&this.$refs.typeForm.resetFields(),this.typeForm.type_name=null},memberFormOpen:function(){this.memberFormVisible=!0,this.memberOpenNum++,this.memberOpenNum>1&&this.$refs.memberForm.resetFields(),this.memberForm.member_name=null},incomeSubmit:function(){var e=this,t=this;t.incomeForm.account_date&&(t.incomeForm.account_date=new Date(t.incomeForm.account_date)),t.$refs.incomeForm.validate(function(a){if(a){var o=e.incomeForm;o.account_flow=1,o.account_date=t.$moment(o.account_date).format("YYYY-MM-DD"),t.$http({method:"GET",url:e.config.baseUrl+"account/addAccount",params:o}).then(function(e){0==e.data.code?(t.$message({message:"提交成功！！",type:"success"}),t.$refs.incomeForm.resetFields(),t.incomeForm={account_date:t.$moment().format("YYYY-MM-DD"),type_id:null,account_sum:null,member_id:null},t.getIncomeList()):t.$message.error("提交失败！！")})}})},typeSubmit:function(){var e=this,t=this;t.$refs.typeForm.validate(function(a){if(a){var o=e.typeForm;o.type_flow=1,t.$http({method:"GET",url:e.config.baseUrl+"type/addType",params:o}).then(function(e){0==e.data.code?(t.typeFormVisible=!1,t.$refs.typeForm.resetFields(),t.$message({message:"提交成功！！",type:"success"}),t.getTypeList()):t.$message.error("提交失败！！")})}})},memberSubmit:function(){var e=this,t=this;t.$refs.memberForm.validate(function(a){if(a){var o=e.memberForm;t.$http({method:"GET",url:e.config.baseUrl+"member/addMember",params:o}).then(function(e){0==e.data.code?(t.memberFormVisible=!1,t.$refs.memberForm.resetFields(),t.$message({message:"提交成功！！",type:"success"}),t.getMemberList()):t.$message.error("提交失败！！")})}})},setChartsPie:function(e){if(e&&e.length>0){var t=[],a=[];e.forEach(function(e){t.push(e.type_name);var o={value:e.type_sum,name:e.type_name};a.push(o)});var o=this.$echarts.init(document.getElementById("myChart")),n={title:{text:"收入类型统计",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} 元 ({d}%)"},legend:{orient:"vertical",left:"left",data:t},series:[{name:"类型收入",type:"pie",radius:"60%",center:["50%","50%"],data:a,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};o.setOption(n)}},setChartLine:function(e){var t=this,a=t.$echarts.init(document.getElementById("chartLine")),o=[],n=[],r="line";"year"==t.incomedModel&&(r="bar"),e.forEach(function(e){"year"==t.incomedModel?o.push(e.account_date):"month"==t.incomedModel&&o.push(t.$moment(e.account_date).format("M-D")),n.push(e.account_sum)});var i={title:{text:"收入金额统计",x:"center"},tooltip:{trigger:"item",formatter:"{b} <br/>{a} : {c} 元"},xAxis:{name:"日期",type:"category",axisLabel:{interval:0,rotate:45},data:o},yAxis:{name:"收入金额"},series:[{name:"金额",type:r,barMaxWidth:50,data:n,itemStyle:{normal:{color:"#2ec7c9"}}}]};a.setOption(i)},handleCurrentChange:function(e){this.currentPageParams.currentPage=e,this.getIncomeList()},handleMonthChange:function(e){this.currentPageParams.currentPage=e,this.monthYearExpendList=this.expendList.slice(10*(e-1),10*e)}},watch:{searchInfo:{handler:function(e,t){this.getIncomeList()},deep:!0},incomedModel:function(e){this.currentPageParams={currentPage:1,showCount:10,totalResult:0},this.searchInfo={date_range:[this.$moment(new Date).format("YYYY-MM"),new Date],date_month:this.$moment().format("YYYY-MM"),date_year:this.$moment().format("YYYY"),type_id:null,member_id:null,account_flow:1}}},mounted:function(){this.$store.state.activeIndex=this.$route.path,this.getMemberList(),this.getTypeList(),this.getIncomeList()}}}});
//# sourceMappingURL=3.9f910bcc4b9e57533a88.js.map