<template>
  <div class="SubLogin" :style="{ backgroundImage: `url(${require('/public/Img1.jpeg')})` }">
    <form>
      <div class="Login" :style="{ display: flex, flexDirection: column, }">
        <h1>Login</h1>
        <div class="LoginPseudo">
          <label for="input"> Username</label>
          <input type="text" placeholder="ex:dvmnthonyy" />
        </div>

        <div class="LoginMdp">
          <label for="input"> Password</label>
          <input type="password" placeholder="" />
        </div>
        <p class="Link">Forget password ?</p>

        <button class="CtaLogin" type="submit">Login</button>

      </div>

      <div class="Line"></div>

      <div class="Subs">
        <h1>Sign Up</h1>
        <div class="AddressEmail">
          <label for="input"> Address email</label>
          <input type="email" placeholder="Ex :JohnDoe@gmail.com" />
        </div>

        <div class="UserName">
          <label for="input"> Username</label>
          <input type="email" placeholder="Ex :dvmnthonyy" />
        </div>

        <div class="PassWord">
          <label for="input"> Password</label>
          <input type="password" placeholder="" />
        </div>

        <div class="DateOfBirth">
          <label for="input">Date of Birth</label>
          <input type="date" />
        </div>

        <div class="MentionLegal">
          <p>
            MatchMyGame may use your phone number to call or send a text messages with information regarding your account.
          </p>
          <p>
            By clicking Sign up you are agreeing to MatchMyGame’s <span>Terms of Service</span> and are acknowledging our
            <span>Privacy
              Notice</span> applies
          </p>
        </div>
        <button class="CtaSub" type="submit">Sign up</button>
      </div>
    </form>

  </div>
</template>


<script>
export default {
  name: 'SubLogin',
  props: {
    msg: String
  }
}




</script>


<style scoped>
.Login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  margin-left: 160px;
  gap: 20px;
  align-items: center;

}

.SubLogin {
  display: flex;
  justify-content: space-between;
  background-image: url('/public/Img1.jpeg')no-repeat center center fixed;
  background-size: cover;
  background-position: center;
  display: flex;
  height: 100vh;
}

form {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
}

.LoginPseudo {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.LoginMdp {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  width: 500px;
  height: 40px;
  border-radius: 10px;
}

.Subs {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  margin-right: 160px;
  gap: 20px;
  align-items: center;
}

.Link {
  position: absolute;
  top: 335px;
  left: 170px;
  color: #6E29D6;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
}

.Line {
  border: 1px solid #3F3F3F;
  height: 703px;
  align-items: center;
  margin-block-start: 64px;
}

.AddressEmail,
.UserName,
.PassWord,
.DateOfBirth {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.MentionLegal p {
  gap: 15px;
}

span {
  color: #6E29D6;
}

.CtaLogin,
.CtaSub {
  width: 500px;
  height: 40px;
  border-radius: 10px;
  color: #6E29D6;
  background: white;
  cursor: pointer;
  margin-top: 20px;
}
</style>
