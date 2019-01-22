<template>
 <el-table
    :data="list"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="活动ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="活动名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="sponsor"
      label="主办方">
    </el-table-column>
    <el-table-column
      prop="address"
      label="活动地址">
    </el-table-column>
    <el-table-column
      prop="starttime"
      label="开始日期">
    </el-table-column>
    <el-table-column
      prop="endtime"
      label="结束时间">
    </el-table-column>
  </el-table>
</template>
<script>
import gatheringApi from "@/api/gathering"
export default {
    data() {
        return {
            list:[]
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            gatheringApi.getList().then(response =>{
                this.list = response.data
            })
        }
    }
}
</script>