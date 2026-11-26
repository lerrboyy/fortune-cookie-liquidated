# Fortune Cookie for the Liquidated Trader

[![Competition](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![Rank](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/lerrboyy/fortune-cookie-liquidated/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![Reward](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/lerrboyy/fortune-cookie-liquidated/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)

One fortune cookie line for a crypto trader who has just been liquidated —
written for the [make.fun bounty](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
"Fortune Cookie for the Liquidated Trader".

## The fortune

> The oracle sees great wealth in your future, trader: the exchange's, mostly, but great wealth nonetheless.

Sixteen words, one line. The oracle's promise is kept whole — great wealth is
really in the trader's future. It just belongs to the exchange now. Rueful,
warm, and technically true.

## How it works

`main.ts` validates the line against the bounty gate (UTF-8, 1–160 characters,
one line, at most 20 words) and writes exactly that line — no trailing
newline — to `/output/entry.txt`. It clears only the contents of the output
directory, never the directory itself, and reads the file back to prove what
landed on disk is byte for byte the validated fortune.

Run it:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
