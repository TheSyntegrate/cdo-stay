import {
  Card,
  CardContent,
  CardHeader,
  Button,
  Input,
  CardFooter,
} from "@/components/ui";
import { Facebook, Mail, Aperture } from "lucide-react";
import { Grid, Link, Stack, Typography } from "@mui/material";

import Beach from "@/components/animation/beach";
import Logo from "../../assets/CdoStay.png";

const LoginScene = () => {
  return (
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
            <Stack alignItems={"center"} className="mt-1">
              <Typography variant="body2" className="text-xs md:text-sm">
                Prepare yourself for:
              </Typography>

              <Stack alignItems={"center"} className="mt-3">
                <Stack className="text-left text-xs md:text-sm w-2/3">
                  <Typography
                    variant="body2"
                    className="line-clamp-2"
                    gutterBottom
                  >
                    ✓ Unlock greater savings with reward rates offered by our
                    partner websites
                  </Typography>
                  <Typography variant="body2" className="mt-2">
                    ✓ Effortlessly resume your search from any device at your
                    convenience
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </CardContent>
          <CardFooter className="bg-grey100-100" />
        </Card>
      </Grid>

      <Grid item>
        <Grid container style={{ width: "100%" }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
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

                <Typography variant="body2" marginTop={1} fontSize={12}>
                  By creating an account, you agree to our&nbsp;
                  <Link
                    href="#"
                    className="underline"
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      margin: "0 4px",
                    }}
                  >
                    Privacy policy
                  </Link>
                  &nbsp;and&nbsp;
                  <Link
                    href="#"
                    className="underline"
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      margin: "0 4px",
                    }}
                  >
                    Terms of use
                  </Link>
                  .
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginScene;
