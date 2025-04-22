// GitHub Copilotの機能体験用サンプルスクリプト

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    // タスク管理機能の初期化
    initTaskManager();
    
    // 温度変換機能の初期化
    initTemperatureConverter();
    
    // メールアドレス検証機能の初期化
    initEmailValidator();
});

/**
 * タスク管理機能の初期化
 * このコメントからCopilotに関数実装を提案させる
 */
function initTaskManager() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');
    
    // ここにタスク追加機能を実装
    // このコメント以降をCopilotに補完させる
    
    // ローカルストレージからタスクを読み込む
    loadTasksFromStorage();
    
    // 「追加」ボタンクリックイベント
    addTaskButton.addEventListener('click', function() {
        addNewTask();
    });
    
    // Enterキー押下でもタスク追加
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addNewTask();
        }
    });
    

    // 演習3: バグ検出と修正の体験
    // タスク追加関数 - ここに意図的なバグを入れておく
    function addNewTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;
        
        // タスク要素作成 - バグ: taskText→"task"と誤記
        createTaskElement("task");
        
        // 入力フィールドをクリア
        taskInput.value = '';
        
        // ローカルストレージに保存
        saveTasksToStorage();
    }
    
    // タスク要素作成
    function createTaskElement(text) {
        const li = document.createElement('li');
        li.textContent = text;
        
        // 完了ボタンの追加
        const completeBtn = document.createElement('button');
        completeBtn.textContent = '完了';
        completeBtn.classList.add('complete-btn');
        completeBtn.addEventListener('click', function() {
            li.classList.toggle('task-complete');
            saveTasksToStorage();
        });
        
        // 削除ボタンの追加
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '削除';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function() {
            li.remove();
            saveTasksToStorage();
        });
        
        // ボタン格納用のコンテナ
        const btnContainer = document.createElement('div');
        btnContainer.appendChild(completeBtn);
        btnContainer.appendChild(deleteBtn);
        
        li.appendChild(btnContainer);
        taskList.appendChild(li);
    }
    
    // ローカルストレージにタスクを保存
    function saveTasksToStorage() {
        const tasks = [];
        const taskItems = taskList.querySelectorAll('li');
        
        taskItems.forEach(item => {
            tasks.push({
                text: item.firstChild.textContent,
                completed: item.classList.contains('task-complete')
            });
        });
        
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    // ローカルストレージからタスクを読み込む
    function loadTasksFromStorage() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            const tasks = JSON.parse(savedTasks);
            
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.textContent = task.text;
                
                if (task.completed) {
                    li.classList.add('task-complete');
                }
                
                taskList.appendChild(li);
            });
        }
    }
}

/**
 * 温度変換機能の初期化関数
 * Copilotにコメントから関数を実装させる
 */
function initTemperatureConverter() {
    const celsiusInput = document.getElementById('celsiusInput');
    const convertButton = document.getElementById('convertTemp');
    const resultDiv = document.getElementById('temperatureResult');
    
    // 演習1: コード補完機能を体験する
    // 摂氏から華氏に変換して表示する機能を実装
    convertButton.addEventListener('click', function() {
        // この部分はCopilotに実装させる
    });
}

/**
 * メールアドレス検証機能の初期化
 * Copilotに実装させることを想定
 */

// 演習2: コメントからコード生成を体験する
function initEmailValidator() {
    // この関数全体をCopilotに実装させる
}

// 演習4: コードリファクタリングの提案体験
// Copilotにリファクタリングを提案させるための非効率な関数
function findMaxNumber(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// Copilotにコメント生成させるための関数
function calculateDiscountedPrice(price, discountRate, isVipCustomer) {
    let finalPrice = price;
    if (isVipCustomer) {
        finalPrice = price * 0.9;
    } else {
        finalPrice = price * (1 - discountRate);
    }
    
    if (finalPrice < 100) {
        finalPrice += 5;
    }
    
    return Math.round(finalPrice);
}