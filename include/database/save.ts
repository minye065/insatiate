import { gameData } from "./vpsSetup";
export function savePlayerData(userID: string)
{
    const transaction = gameData.transaction(() =>
    {
        const row = gameData.prepare("SELECT userID FROM players WHERE userID = ?").get(userID);
        if (row === undefined)
        {
            throw new Error("savePlayerData: no player found for " + userID);
        }
    });
    transaction();
}