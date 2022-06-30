<template>
    <div class="common-layout">
        <el-container >
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
                                <el-dropdown-item @click="logout">退出系统</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </el-header>
            <el-container style="color:blueviolet;">
                <el-aside width="200px">
                    <el-row class="tac">
                        <el-col>
                            <el-menu active-text-color="#ffd04b" class="el-menu-vertical-demo"
                                text-color="#fff" background-color="#79bbff" @open="handleOpen" @close="handleClose">
                                <div v-for="(item, index) in menuData" :key="index">
                                    <el-sub-menu :index="item.menuId" v-if="item.type == 0 && item.parentId == 0" :key="item.menuId">
                                        <template #title>
                                            <el-icon>
                                                <component :is="item.icon"/>
                                            </el-icon>
                                            <span>{{ item.name }}</span>
                                        </template>
                                        <el-menu-item :index="menu.menuId" v-for="(menu) in item.sysMenus" :key="menu.menuId">
                                             <span>{{ menu.name }}
                                        </span></el-menu-item>
                                        <!-- <el-sub-menu index="1-4">
                                            <template #title>item four</template>
                                            <el-menu-item index="1-4-1">item one</el-menu-item>
                                        </el-sub-menu> -->
                                    </el-sub-menu>
                                </div>


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

    data() {
        return {
            menuData: {
                "menuId": 0,
                "parentId": 0,
                "name": '',
                "url": '',
                "perms": '',
                "type": 0,
                "icon": '',
                "orderNum": '',
                "deleteFlag": 0,
                sysMenus:{}
            }
        }
    },

    created() {
        this.listMenu();
    },

    methods: {
        avatarClick: function () {
            console.log("dropdown.value", this.$refs.dropdown)
            this.$refs.dropdown.handleOpen()
        },
        logout: function () {
            this.$http.api.Logout().then(res => {
                if (res.data.code == 0) {
                    localStorage.removeItem("token")
                    this.$router.push("login")
                }
            })
        },

        listMenu: function () {
            this.$http.api.listMenu().then(res => {
                if (res.data.code == 0) {
                    this.menuData = res.data.data
                    console.log("menuData", this.menuData)
                }
            })
        },

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
    background-color: #79bbff;
}

.el-header {
    background-color: #79bbff;
    height: 60px;
    box-shadow: 0 0 5px;

}

.el-sub-menu__title {
    background-color: #79bbff;
}

.header-portrait {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

.header-portrait .el-avatar:hover {
    cursor: pointer;
}
</style>