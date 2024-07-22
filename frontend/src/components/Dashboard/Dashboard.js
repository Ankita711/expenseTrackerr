import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layout';
import { rupee } from '../../utils/Icons';
import Chart from '../Chart/Chart';
import './Dashboard.css'

function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()
    const minIncome = incomes.length > 0 ? Math.min(...incomes.map(item => item.amount)) : 0;
    const maxIncome = incomes.length > 0 ? Math.max(...incomes.map(item => item.amount)) : 0;
    const minExpense = expenses.length > 0 ? Math.min(...expenses.map(item => item.amount)) : 0;
    const maxExpense = expenses.length > 0 ? Math.max(...expenses.map(item => item.amount)) : 0;
    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <div className='dashboardStyle'>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p className='incomeAmount'>
                                    {rupee} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p className='expenseAmount'>
                                    {rupee} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p style={{color: (totalBalance()>0)?'#42AD00':'#FF6347', fontSize:35}} >
                                    {rupee} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                {rupee} {minIncome}
                            </p>
                            <p>
                                {rupee} {maxIncome}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                {rupee} {minExpense}
                            </p>
                            <p>
                                {rupee} {maxExpense}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </div>
    )
}

export default Dashboard