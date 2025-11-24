<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin" class="login-box">
      <img :src="loginIcon" alt="" class="login-icon" />
      <h2>เข้าสู่ระบบ</h2>

      <input
        type="email"
        v-model="email"
        placeholder="อีเมล"
        class="input-field"
        required
      />
      <input
        type="password"
        v-model="password"
        placeholder="รหัสผ่าน"
        class="input-field"
        required
      />

      <button type="submit" class="btn-primary">เข้าสู่ระบบ</button>
      <button type="button" class="btn-secondary" @click="handleRegister">
        สมัครสมาชิก
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      loginIcon: new URL('/mnt/data/8f42f7d2-2671-42fe-821f-0bd2ecd32004.png', import.meta.url).href,
    };
  },
  methods: {
    handleLogin() {
      alert(`เข้าสู่ระบบด้วย: ${this.email}`);
    },
    handleRegister() {
      alert("ไปหน้าสมัครสมาชิก");
    },
  },
};
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #121212;
  font-family: "Poppins", sans-serif;
}

.login-box {
  background: #0a0a0a;
  padding: 30px 35px;
  border-radius: 12px;
  box-shadow: 0 0 15px #00fff7, 0 0 40px #00fff7 inset;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-icon {
  width: 60px;
  margin-bottom: 15px;
  filter: grayscale(100%) drop-shadow(0 0 3px #00fff7);
}

h2 {
  color: #00fff7;
  margin-bottom: 25px;
  font-weight: 600;
  text-shadow: 0 0 10px #00fff7;
}

.input-field {
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #00fff7;
  background: #121212;
  color: #00fff7;
  font-size: 16px;
  outline: none;
  box-shadow: 0 0 10px #00fff7 inset;
  transition: background 0.3s ease;
}

.input-field::placeholder {
  color: #00fff7aa;
}

.input-field:focus {
  background: #0a0a0a;
  box-shadow: 0 0 15px #00fff7;
  border-color: #00fff7;
}

.btn-primary {
  width: 100%;
  padding: 12px;
  background-color: #00fff7;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  color: #121212;
  cursor: pointer;
  margin-bottom: 12px;
  box-shadow: 0 0 12px #00fff7;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #00d1c1;
  box-shadow: 0 0 20px #00d1c1;
}

.btn-secondary {
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 1.5px solid #00fff7;
  border-radius: 6px;
  font-weight: 600;
  color: #00fff7;
  cursor: pointer;
  box-shadow: 0 0 10px #00fff7;
  transition: background-color 0.3s ease;
}

.btn-secondary:hover {
  background-color: #002f2e;
  box-shadow: 0 0 20px #00fff7;
}
</style>
