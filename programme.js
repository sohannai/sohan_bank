      //form event handler codes
        const sendBtn = document.getElementById('send-button');
        sendBtn.addEventListener('click', function(){
            FormArea = document.getElementById('form-area');
            FormArea.style.display = "none";
            const transactionArea = document.getElementById('transaction-area');
            transactionArea.style.display ="block"
        })

        // deposit form event handler
        const depositBtn = document.getElementById("deposit-btn");
        depositBtn.addEventListener('click', function(){
            const depositAmount = document.getElementById("deposit-amount").value; 
            const depositNumber = parseFloat(depositAmount);

        //here is the normall way to do that thing without finction..

            // const currentDeposit = document.getElementById("currentDeposit").innerText;
            // const currentDepositNumber = parseFloat(currentDeposit);
            // const totalDeposit = currentDepositNumber + depositNumber ;
            // document.getElementById("currentDeposit").innerText = totalDeposit;
            

            // const totalBalance = document.getElementById("totalBalance").innerText;
            // totalBalanceNumber = parseFloat(totalBalance);
            // totalBalanceNumber = totalBalanceNumber + depositNumber;
            // document.getElementById("totalBalance").innerText= totalBalanceNumber;

            document.getElementById("deposit-amount").value = "";

        //easily using function second way to that same thing..!!

            updateSpanText("currentDeposit", depositNumber);
            updateSpanText("totalBalance", depositNumber);
        })

        
        function updateSpanText (id, depositNumber){
                const totalBalance = document.getElementById(id).innerText;
                totalBalanceNumber = parseFloat(totalBalance);
                totalBalanceNumber = totalBalanceNumber + depositNumber;
                document.getElementById(id).innerText= totalBalanceNumber;
            }


        // withdraw er kahini ohon sob eihane..!!

        const withdrawBtn = document.getElementById("withdraw-btn");
        withdrawBtn.addEventListener('click', function(){
            const withdrawAmount = document.getElementById("withdraw-amount").value; 
            const withdrawNumber = parseFloat(withdrawAmount);
            

            const defaultWithdrawAmount = document.getElementById("default-withdraw-amount").innerText;   //previous ammonut of withdraw
            const defaultWithdrawNumber = parseFloat(defaultWithdrawAmount);
            const totalWithdraw = withdrawNumber + defaultWithdrawNumber;
            

            document.getElementById("default-withdraw-amount").innerText = totalWithdraw;

            const totalBalance = document.getElementById("totalBalance").innerText;
            totalBalanceNumber =parseFloat(totalBalance);
            const finalBalance = totalBalanceNumber-withdrawAmount;
            document.getElementById("totalBalance").innerText = finalBalance;


            document.getElementById("withdraw-amount").value="";

        })
        


        

