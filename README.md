# Short Film Funding Project

This project emerged with the understanding that social development is possible by revealing the potential of individuals and sharing inspiring stories with the society. With this project, which can also be seen as a social responsibility, it is aimed to reveal the importance of short films and to fund them.

# Usage	

To deploy the contract for development, follow these steps:
1.	clone this repo locally
2.	run yarn to install dependencies
3.	run ./scripts/1.dev-deploy.sh to deploy the contract (this uses near dev-deploy)

Your contract is now ready to use.

# To use the contract you can do any of the following:
----------------------------------------------------------------------------------------------
- Run ./scripts/2.create-shortfilm.sh to create the short film by the director who wants people to fund
- Run ./scripts/3.remove-shortfilm.sh to delete the short film by the director 
- Run ./scripts/4.fund-shortfilm.sh to fund the short film by the funder
- Run ./scripts/5.send-fund.sh for transferring the accumulated funds to the wallet of the director
- Run ./scripts/5.send-fund.sh to transfer the funds accumulated in the contract to the manager's wallet
- Run ./scripts/6.find-shortfilm.sh to find the short film 
- Run ./scripts/7.list-shortfilms.sh to list the short films


