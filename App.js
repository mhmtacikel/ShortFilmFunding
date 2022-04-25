import * as nearAPI from "near-api-js";

const {utils} = nearAPI;

const App = ({contract, currentUser, nearConfig, wallet}) => {
    
    const signIn = () => {
        wallet.requestSignIn(nearConfig.contractName, "");
    };

    const signOut = () => {
        wallet.signOut();
        window.location.replace(window.location.origin + window.location.pathname);
    };

    const buyMovie = async(address, id, funds) => {
        alert(id);

        const transMoney = wallet.account().functionCall({
            contractId: "",
            methodName: "transMoney",
            args: {accountId: address, id: id, funds: funds},
            gas,
            attachedDeposit: utils.format.parseNearAmount(funds),
        });
        console.log(transferMoney);
    };
}