<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <div class="header-portrait">

                    <el-dropdown ref="dropdown" trigger="contextmenu" style="margin-right: 30px">
                        <span class="el-dropdown-link">
                            <div>
                                <el-avatar :fit="scale - down" @click="avatarClick"
                                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                            </div>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item
                                @click="logout">退出系统</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </el-header>
            <el-container style="color:blueviolet;">
                <el-aside width="200px">
                    <el-row class="tac">
                        <el-col>
                            <el-menu active-text-color="#ffd04b" class="el-menu-vertical-demo" default-active="2"
                                text-color="#fff" background-color="#545c64" @open="handleOpen" @close="handleClose">
                                <el-sub-menu index="1">
                                    <template #title>
                                        <el-icon>
                                            <location />
                                        </el-icon>
                                        <span>系统管理</span>
                                    </template>
                                    <el-menu-item-group title="Group One">
                                        <el-menu-item index="1-1">item one</el-menu-item>
                                        <el-menu-item index="1-2">item one</el-menu-item>
                                    </el-menu-item-group>
                                    <el-menu-item-group title="Group Two">
                                        <el-menu-item index="1-3">item three</el-menu-item>
                                    </el-menu-item-group>
                                    <el-sub-menu index="1-4">
                                        <template #title>item four</template>
                                        <el-menu-item index="1-4-1">item one</el-menu-item>
                                    </el-sub-menu>
                                </el-sub-menu>
                            </el-menu>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>

export default {

    methods: {
        avatarClick: function () {
            console.log("dropdown.value", this.$refs.dropdown)
            this.$refs.dropdown.handleOpen()
        },
        logout: function(){
            this.$http.api.Logout().then(res=>{
                if(res.data.code == 0){
                    localStorage.removeItem("token")
                    this.$router.push("login")
                }
            })
        }
    }
}
</script>

<style>
.common-layout {
    height: 100%;
}

.el-container {
    height: 100%;
}

.el-aside {
    background-color: #545c64;
}

.el-header {
    background-color: #545c64;
    height: 80px;
}

.header-portrait {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

.header-portrait .el-avatar:hover {
    cursor: pointer;
}
</style>