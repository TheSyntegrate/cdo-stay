import {
  Card,
  CardContent,
  CardHeader,
  Button,
  Input,
  CardFooter,
} from "@/components/ui";
import Beach from "@/components/animation/beach";
import Logo from "../../assets/CdoStay.png";
import { Facebook, Mail, Aperture } from "lucide-react";
import { Grid, Stack, Typography } from "@mui/material";

const LoginScene = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="space-around"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card className="w-full md:w-[477px] round-lg">
            <CardHeader className="bg-shades-400 rounded-t-lg items-center">
              <Beach />
            </CardHeader>
            <CardContent className="bg-grey100-100">
              <div className="items-center mt-1">
                <Typography variant="body2" className="text-xs md:text-sm">
                  Prepare yourself for:
                </Typography>
                <div className="mt-3 flex justify-center">
                  <div className="text-left text-xs md:text-sm w-2/3">
                    <p className="line-clamp-2">
                      ✓ Unlock greater savings with reward rates offered by our
                      partner websites
                    </p>
                    <p className="mt-2">
                      ✓ Effortlessly resume your search from any device at your
                      convenience
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-grey100-100" />
          </Card>
        </Grid>

        {/* Second Column */}
        <Grid item>
          <Grid container style={{ width: "100%" }}>
            <Grid
              item
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={Logo}
                alt="logo"
                style={{
                  width: "40%",
                  height: "auto",
                }}
              />

              <Grid
                container
                direction="column"
                marginTop={1}
                justifyContent={"space-evenly"}
              >
                <Typography
                  variant="body1"
                  align="left"
                  sx={{ fontSize: "0.75rem" }}
                >
                  Make an account or log in using your email.
                </Typography>

                <Grid item xs={10} marginTop={1}>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="mt-2 mb-3 w-full sm:w-[100%] h-[59px]"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />

                  <Input
                    type="password"
                    placeholder="Enter your password"
                    className="mt-2 mb-3 w-full sm:w-[474px] h-[59px]"
                    required
                  />
                  <Button
                    type="submit"
                    variant={"default"}
                    className="bg-shades-500 mt-1 w-full"
                  >
                    Sign In
                  </Button>

                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                      marginBottom: "0.5rem",
                      margin: 2,
                    }}
                  >
                    ━━━━━━━━━ or continue with ━━━━━━━━━
                  </Typography>

                  <Stack gap={2} direction={"row"} alignItems={"center"}>
                    <Button className="w-full sm:w-1/2 bg-white border border-black text-black">
                      <Facebook className="mr-2 h-4 w-4" /> Facebook
                    </Button>

                    <Button className="w-full sm:w-1/2 bg-white border border-black text-black">
                      <Mail className="mr-2 h-4 w-4" /> Google
                    </Button>

                    <Button className="w-full sm:w-1/2 bg-white border border-black text-black">
                      <Aperture className="mr-2 h-4 w-4" /> Discord
                    </Button>
                  </Stack>

                  <p className="text-xs mt-3 mb-2">
                    By creating an account, you agree to our{" "}
                    <a href="#" className="underline">
                      <span style={{ fontWeight: "bold" }}>Privacy policy</span>
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline">
                      <span style={{ fontWeight: "bold" }}>Terms of use</span>
                    </a>
                    .
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginScene;
