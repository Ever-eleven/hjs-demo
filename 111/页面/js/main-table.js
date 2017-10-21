 $(function(){
    window.operateEvents = {
    'click .RoleOfedit': function (e, value, row, index) {
        console.log(index);
       $("#changes").modal('show');
     }
   };
    window.see_peo = {
    'click .RoleOfedit': function (e, value, row, index) {
        console.log(index);
       $("#delcfmModel").modal('show');
     }
   };

   /*部门站点链接维护*/
  $.ajax({
        url : "sasa.json",
        type : "get",
        dataType : "json",      
        success : function(value) {
            var obj = [];
            $.each(value.rows, function(i, d) {
                obj.push(d);                           
            });
                                 
             $table = $('#table').bootstrapTable(
                    {
                    data : obj,                                
                    pagination : true,
                    pageNumber : 1,
                    pageSize : 8,
                    pageList : [ 5, 10, 20 ],  
                                                
                    columns : [                                           
                            {
                                field : 'number',
                                title : '编号',
                                width : 80,
                                formatter : function(value,
                                        row, index) {
                                    return index + 1;
                                }
                            }, {

                                field : 'xt', 
                                title : '系统名称',                                
                                align : 'center',
                                valign : 'center',
                            }, {
                                field : 'mail',
                                title : '系统链接',
                                align : 'center',
                                valign : 'center',
                            }, {
                                field : 'dictionaryid',
                                title : '管理员操作',
                                align : 'center',
                                valign : 'center',
                                events: operateEvents,
                                formatter: actionFormatter

                            }],
                           
                });
                 function actionFormatter(value, row, index) {
                    return [
               '<img src="img/change.png" class="RoleOfedit btn btn-sm"   data-toggle="modal" style="display:inline;width: 45px;height: 35px;">',
               ].join('');  
                 } ;
    }
    });



 /*员工反馈*/
   $.ajax({
        url : "sasa.json",
        type : "get",
        dataType : "json",      
        success : function(value) {
            var obj = [];
            $.each(value.rows, function(i, d) {
                obj.push(d);                           
            });
                                 
             $table = $('#people_table').bootstrapTable(
                    {
                    data : obj,                                
                    pagination : true,
                    pageNumber : 1,
                    pageSize : 10,
                    pageList : [ 5, 10, 20 ],                                 
                    columns : [  {

                                field : 'name', 
                                title : '姓名',                                
                                align : 'center',
                                valign : 'center',
                            }, {
                                field : 'menu',
                                title : '反馈内容',
                                align : 'center',
                                valign : 'center',
                            }, {
                                field : 'time',
                                title : '反馈时间',
                                align : 'center',
                                width:'200',
                                valign : 'center',
                            }],
                           
                });
                

    


    }
    });

/*查看评论*/
  $.ajax({
        url : "sasa.json",
        type : "get",
        dataType : "json",      
        success : function(value) {
            var obj = [];
            $.each(value.rows, function(i, d) {
                obj.push(d);                           
            });
                                 
             $table = $('#see_table').bootstrapTable(
                    {
                    data : obj,                                
                    pagination : true,
                    pageNumber : 1,
                    pageSize : 7,
                    pageList : [ 5, 10, 20 ],                                 
                    columns : [                                           
                            {

                                field : 'name', 
                                title : '姓名',                                
                                align : 'center',
                                valign : 'center',
                            }, {
                                field : 'news',
                                title : '新闻标题',
                                align : 'center',
                                valign : 'center',
                            }, {
                                field : 'menu',
                                title : '内容',
                                align : 'center',
                                valign : 'center',
                            }, {
                                field : 'time',
                                title : '评论时间',
                                align : 'center',
                                valign : 'center',
                            }, {
                                field : 'dasda',
                                title : '管理员操作',
                                align : 'center',
                                valign : 'center',
                                events: see_peo,
                                formatter: see

                            }],
                           
                });
                 function see(value, row, index) {
                    return [
               '<img src="img/del.svg" class="RoleOfedit btn-sm"   data-toggle="modal" style="display:inline;width: 118px;height: 48px;">',
               ].join('');  
                 } ;

    


    }
    });

})
