import passport from "passport"
import passportLocal from "passport-local"

const LocalStrategy = passportLocal.Strategy;

passport.use(new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    
}))

