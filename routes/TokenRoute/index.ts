import { Router } from "express";
import { prisma } from "../../config/config";

// Create a new instance of the Express Router
const TokenRouter = Router();


TokenRouter.post("/create", async (req, res) => {
  console.log("token creating")
  const { tokenAddress, description, logo, twitter, telegram, discord, mWallet, tokenName } = req.body;

  try {
    const newToken = await prisma.token.create({
      data: {
        tokenName: tokenName,
        tokenAddress: tokenAddress,
        description: description,
        logo: logo,
        twitter,
        telegram,
        discord,
        mWallet
      }
    })
  
    console.log("new token created: ", newToken);
  
    res.json(newToken)
  } catch (error) {
    console.log("creating token error! => ", error)
    res.status(500).json({err: error})
  }

})

export default TokenRouter;
