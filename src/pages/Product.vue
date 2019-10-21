<!--
 * @Author: your name
 * @Date: 2019-10-21 22:59:30
 * @LastEditTime: 2019-10-22 00:09:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /d:\briup\8vue\ej_food\src\pages\Product.vue
 -->
<template>
    <div id="product">
        <!--面包屑导航+按钮组 -->
        <div class="top">
            <div class="bread">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">食品管理</a></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="btns">
                <el-button type="warning" size="mini" plain>添加食品</el-button>
                <el-button type="danger" size="mini" plain>批量删除</el-button>
            </div>
        </div>
        <!-- 真正内容区 -->
        <div class="content">
            <div class="table">
                <el-table style="width: 100%">
                    <el-table-column label="食品编号"></el-table-column>
                    <el-table-column label="食品名称"></el-table-column>
                    <el-table-column label="食品描述"></el-table-column>
                    <el-table-column label="单价"></el-table-column>
                    <el-table-column label="状态"></el-table-column>
                    <el-table-column label="图片"></el-table-column>
                    <el-table-column label="类别"></el-table-column>
                    <el-table-column align="right">
                        <template  slot="header" slot-scope="scope">
                            <el-input size="mini" placeholder="输入食品名称搜索"/>
                        </template>
                        <template>
                            <el-button size="mini">
                                <a class="btn_del" href="javascript:void(0)"><i class="iconfont icon-trash"></i></a>&nbsp;
                            </el-button>
                            <el-button size="mini">
                                <a class="btn_upd" href="javascript:void(0)"><i class="iconfont icon-xiugai" id="btn_upd"></i></a>&nbsp;
                            </el-button>
                        </template>
                        </el-table-column>
                </el-table>
            </div>
            <div class="paging">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
            
        </div>
    </div>
</template>



<script>
import axios from 'axios'
import qs from 'qs'
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
    /* 顶部 */
    .bread{
        float: left;
    }

    .btns{
        float: right;
    }
    /* 内容区 */
    .content{
        padding-top: 2rem;
    }
    .paging{
        float:right;
    }
</style>