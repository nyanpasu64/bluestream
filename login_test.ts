import { assertEquals, assertExists } from "std/assert/mod.ts";

import { login } from "./login.ts";

Deno.test({
  name: "login once",
  // hits the real bsky.social, so skip it when no credentials are configured
  ignore: !Deno.env.get("BLUESKY_IDENTIFIER"),
  fn: async () => {
    const agent1 = await login();
    assertExists(agent1.session!.did);

    const agent2 = await login();
    assertEquals(agent1.session!.did, agent2.session!.did);
  },
});
