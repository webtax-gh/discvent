(this.webpackJsonpdiscvent = this.webpackJsonpdiscvent || []).push([
  [0],
  {
      34: function (e, t, a) {},
      39: function (e, t, a) {
          "use strict";
          a.r(t);
          var n = a(2),
              r = a(0),
              o = a.n(r),
              i = a(11),
              s = a.n(i),
              c = (a(34), a(74)),
              l = a(75),
              d = a(72),
              h = a(71),
              m = a(70),
              p = a(68),
              g = a(66),
              u = a(67),
              b = a(64),
              j = a(69);
          function f(e) {
              for (var t = e.length - 1; t > 0; t--) {
                  var a = Math.floor(Math.random() * (t + 1)),
                      n = [e[a], e[t]];
                  (e[t] = n[0]), (e[a] = n[1]);
              }
              return e;
          }
          var v = Object(b.a)({ button: { "&:hover": { backgroundColor: "#1976d2" } } });
          function x(e) {
              function t(e) {
                  return e > 1 ? "s" : "";
              }
              var a = Math.floor(e / 1e3),
                  n = Math.floor(a / 31536e3);
              if (n) return n + " year" + t(n);
              var r = Math.floor((a %= 31536e3) / 86400);
              if (r) return r + " day" + t(r);
              var o = Math.floor((a %= 86400) / 3600);
              if (o) return o + " hour" + t(o);
              var i = Math.floor((a %= 3600) / 60);
              if (i) return i + " minute" + t(i);
              var s = a % 60;
              return s ? s + " second" + t(s) : "less than a second";
          }
          function y(e) {
              var t = e.time,
                  a = v();
              return t > 16082388e5
                  ? Object(n.jsx)(g.a, {
                        container: !0,
                        spacing: 2,
                        justify: "center",
                        children: Object(n.jsx)(g.a, {
                            item: !0,
                            children: Object(n.jsx)(c.a, {
                                variant: "contained",
                                color: "secondary",
                                className: a.button,
                                onClick: function () {
                                    window.location.href = "https://discord.gg/discvent";
                                },
                                children: Object(n.jsx)(u.a, {
                                    component: "h4",
                                    variant: "h5",
                                    style: { fontWeight: "bold" },
                                    align: "center",
                                    color: "textPrimary",
                                    children: Object(n.jsx)(g.a, { item: !0, children: Object(n.jsx)("a", { style: { color: "inherit", textDecoration: "inherit" }, children: "Join Server" }) }),
                                }),
                            }),
                        }),
                    })
                  : Object(n.jsx)(g.a, {
                        container: !0,
                        spacing: 2,
                        justify: "center",
                        children: Object(n.jsx)(u.a, {
                            component: "h4",
                            variant: "h5",
                            style: { fontWeight: "bold", color: "#ff9800" },
                            align: "center",
                            color: "textPrimary",
                            children: Object(n.jsxs)(g.a, { item: !0, children: ["The server will open in ", x(16082388e5 - t), "."] }),
                        }),
                    });
          }
          function O() {
              return Object(n.jsxs)(u.a, {
                  variant: "body2",
                  color: "textSecondary",
                  align: "center",
                  children: [
                      "Copyright \xa9 ",
                      f(["Bluetriggerfish", "CustomName", "FakerUp", "PickSuprise", "RJain", "SilentMemer", "Toadstar0"]).map(function (e) {
                          return e + " ";
                      }),
                      new Date().getFullYear(),
                      ".",
                  ],
              });
          }
          var w = Object(b.a)(function (e) {
                  return {
                      icon: { marginRight: e.spacing(2) },
                      heroContent: { backgroundColor: e.palette.background.paper, padding: e.spacing(8, 0, 6) },
                      heroButtons: { marginTop: e.spacing(4) },
                      cardGrid: { paddingTop: e.spacing(8), paddingBottom: e.spacing(8) },
                      card: { height: "100%", display: "flex", flexDirection: "column" },
                      cardMedia: { paddingTop: "56.25%" },
                      cardContent: { flexGrow: 1 },
                      footer: { backgroundColor: "#23272A", padding: e.spacing(6) },
                  };
              }),
              k = {
                  1: ["Dank Memer", "Global currency game with over 10m users, stealing, pets, unique items, and more! We also have image generation, memes, and mini-games! ", "https://i.imgur.com/8nLFCVP.png", "https://dankmemer.lol"],
                  2: ["Reaction Roles", " React to a message to get a role! Add as many reaction roles as you want to your message!", "https://droplet.gg/assets/img/Reaction_Roles_logo.png", "https://droplet.gg/ReactionRoles"],
                  3: [
                      "Kuroka",
                      "\ud83c\udf89 | Best Giveaways Bot \u2022 Stable & 100% free \u2022 No ads \u2022 25+ possible requirements \u2022 Scheduled Giveaways \u2022 Invites \u2022 Drops | \ud83c\udf89 ",
                      "https://cdn.discordapp.com/avatars/754024463137243206/589a2c87e5d1f5711e2dd22ca7b9af3c.webp?size=512",
                      "https://www.kuroka.xyz/",
                  ],
                  4: ["dsc.gg", "Vanity links for your server, bot, or template.", "https://dsc.gg/images/logo.png", "https://dsc.gg"],
                  5: ["Helper", "Helper is the best bot to manage your server and keep your users happy!", "https://images.discordapp.net/avatars/409538753997307915/90db348df2752ba6fabb2910955b7e86.png?size=512", "https://helper.wtf/"],
                  6: [
                      "Statbot",
                      "Server stats bot \u2605Dashboard & graphs \u2605Channel counters w/ members, online, goals, clocks, statistics \u2605Roles using serverstats > levels",
                      "https://images.discordapp.net/avatars/491769129318088714/f23fd300d377ab133db1d6ac7db5d10b.png?size=512",
                      "https://statbot.net/",
                  ],
                  7: [
                      "salad.io",
                      "Run Salad, the easiest crypto miner for gamers, to earn  Discord Nitro, Amazon gift cards, Steam games, and more without the complicated setup of bitcoin mining. ",
                      "https://www.salad.io/images/community-logo-desktop.png?f=1&nofb=1",
                      "https://salad.io",
                  ],
                  8: [
                    "DiscordRep",
                    "Spice up the discord experience with our extensive user reputation searches on DiscordRep. Reputation on Discord to prevent fraud.",
                    "https://cdn.discordapp.com/attachments/787891650202042420/790339742042030090/DREP_Logo.png",
                    "https://discordrep.com",
                  ],
                  9: [
                      "ChannelBot",
                      "Build and manage your community with simple commands! ChannelBot has tons of features, like welcome messages, server backups, voice-text linking, and much more! Build the community of your dreams, it's easy with ChannelBot.",
                      "https://images.discordapp.net/avatars/443545183997657120/8127ab612c0a767343f777888792049f.png?size=512",
                      "https://channelbot.xyz",
                  ],
                  10: ["CountBot", "CountBot is an easy-to-use, highly configurable, and super fun minigame Discord bot that manages a counting channel.", "https://bremea.com/images/countbotdark.png", "https://bremea.com/countbot/"],   
                  11: [
                    "TGG's Gorilla Gang",
                    "TGG's Gorilla Gang Mk.2 Is an amazing gaming community server! Access to chats to find friends to play with, voice channels with amazing music bots, fun channels with dank memer, general chats to find new friends and an amazing and growing community with 60,000 + members!",
                    "https://cdn.discordapp.com/avatars/788116089161646151/8f182301879946a85b871a40e486651e.png?size=256",
                    "https://dsc.gg/gorillagang",
                  ],
              },
              C = f(Object.keys(k));
          function B() {
              var e = w();
              return Object(n.jsxs)(o.a.Fragment, {
                  children: [
                      Object(n.jsx)(p.a, {}),
                      Object(n.jsxs)("main", {
                          children: [
                              Object(n.jsx)("div", {
                                  className: e.heroContent,
                                  style: { backgroundColor: "#23272A" },
                                  children: Object(n.jsxs)(j.a, {
                                      maxWidth: "lg",
                                      children: [
                                          Object(n.jsx)(u.a, {
                                              component: "h1",
                                              variant: "h2",
                                              align: "center",
                                              color: "textPrimary",
                                              style: { fontSize: "70px" },
                                              gutterBottom: !0,
                                              children: Object(n.jsx)("b", { children: "Discvent" }),
                                          }),
                                          Object(n.jsx)(u.a, {
                                              variant: "h5",
                                              align: "center",
                                              color: "textSecondary",
                                              paragraph: !0,
                                              children:
                                                  "A full week filled with fun events, giveaways, and celebrations. While Snowsgiving might be over, there's still a lot more to celebrate! Join your favorite Discord YouTubers in celebrating Discvent!",
                                          }),
                                          Object(n.jsx)("div", { className: e.heroButtons, children: Object(n.jsx)(y, { time: Date.now() }) }),
                                      ],
                                  }),
                              }),
                              Object(n.jsxs)(j.a, {
                                  className: e.cardGrid,
                                  maxWidth: "md",
                                  children: [
                                      Object(n.jsx)(u.a, { component: "h2", variant: "h3", align: "center", color: "textPrimary", gutterBottom: !0, children: "Sponsors" }),
                                      Object(n.jsx)(g.a, {
                                          container: !0,
                                          spacing: 4,
                                          children: C.map(function (t) {
                                              return Object(n.jsx)(
                                                  g.a,
                                                  {
                                                      item: !0,
                                                      xs: 12,
                                                      sm: 6,
                                                      md: 4,
                                                      onClick: function () {
                                                          window.location.href = k[t][3];
                                                      },
                                                      children: Object(n.jsxs)(l.a, {
                                                          style: { borderRadius: "20px" },
                                                          className: e.card,
                                                          children: [
                                                              Object(n.jsx)(m.a, { className: e.cardMedia, image: k[t][2], title: "Image title" }),
                                                              Object(n.jsxs)(h.a, {
                                                                  className: e.cardContent,
                                                                  children: [Object(n.jsx)(u.a, { gutterBottom: !0, variant: "h5", component: "h2", children: k[t][0] }), Object(n.jsx)(u.a, { children: k[t][1] })],
                                                              }),
                                                              Object(n.jsx)(d.a, {
                                                                  children: Object(n.jsx)(c.a, {
                                                                      size: "small",
                                                                      color: "primary",
                                                                      children: Object(n.jsx)("a", { style: { color: "inherit", textDecoration: "inherit" }, href: k[t][3], children: "View" }),
                                                                  }),
                                                              }),
                                                          ],
                                                      }),
                                                  },
                                                  t
                                              );
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      Object(n.jsxs)("footer", {
                          className: e.footer,
                          children: [
                              Object(n.jsx)(u.a, { variant: "h6", align: "center", gutterBottom: !0, children: "Discvent" }),
                              Object(n.jsx)(u.a, { variant: "subtitle1", align: "center", color: "textSecondary", component: "p", children: "Happy Holidays!" }),
                              Object(n.jsx)(O, {}),
                              Object(n.jsx)(u.a, { variant: "subtitle2", align: "center", color: "textSecondary", component: "p", children: "Site created by webtax#9393" }),
                          ],
                      }),
                  ],
              });
          }
          var S = function (e) {
                  e &&
                      e instanceof Function &&
                      a
                          .e(3)
                          .then(a.bind(null, 76))
                          .then(function (t) {
                              var a = t.getCLS,
                                  n = t.getFID,
                                  r = t.getFCP,
                                  o = t.getLCP,
                                  i = t.getTTFB;
                              a(e), n(e), r(e), o(e), i(e);
                          });
              },
              D = a(73),
              R = a(26),
              M = Object(R.a)({ shadows: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], palette: { type: "dark", primary: { main: "#00b0ff" }, secondary: { main: "#3f51b5" } } });
          s.a.render(Object(n.jsx)(o.a.StrictMode, { children: Object(n.jsx)(D.a, { theme: M, children: Object(n.jsx)(B, {}) }) }), document.getElementById("root")), S();
      },
  },
  [[39, 1, 2]],
]);
