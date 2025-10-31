import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import User from "./models/userModel";

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_SECRET,
};

export default (passport) => {
	passport.use(
		new JwtStrategy(opts, async (jwt_payload, done) => {
			try {
				const user = await User.findById(jwt_payload.id);
				if (user) {
					return done(null, user); // user found
				}
				return done(null, false); // user not found
			} catch (err) {
				return done(err, false);
			}
		})
	);
};
