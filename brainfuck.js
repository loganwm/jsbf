var MAX_MEMORY = 4096;

var Brainfuck = function()
{
	this.instruction_pointer = 0;
	this.memory_pointer = 0;
	this.memory = [];

	this.program = "+++.[.-]-.";

};

Brainfuck.prototype =
{

	clearMemory: function()
	{
		for (var index = 0; index < MAX_MEMORY; index++)
		{
			this.memory[index] = 0;
		}
	},

	/**************************************
	Begin Opcodes
	***************************************/

	operatorCellShiftLeft: function()
	{
		console.log("Cock");
	},

	operatorCellShiftRight: function()
	{
		console.log("Cock");
	},
	
	operatorIncrementCell: function()
	{
		this.memory[this.memory_pointer]++;
		
		/* Increment Instruction Pointer */
		this.instruction_pointer++;
	},

	operatorDecrementCell: function()
	{
		this.memory[this.memory_pointer]--;
		
		/* Increment Instruction Pointer */
		this.instruction_pointer++;
	},
	
	operatorPrintCell: function()
	{
		console.log(this.memory[this.memory_pointer]);

		/* Increment Instruction Pointer */
		this.instruction_pointer++;
	},

	operatorBeginLoop: function()
	{
		//console.log(this.memory[this.pointer]);

		/* Increment Instruction Pointer */
		this.instruction_pointer++;
	},

	operatorEndLoop: function()
	{
		//console.log(this.memory[this.pointer]);

		/* Increment Instruction Pointer */
		this.instruction_pointer++;
	},

	operatorInput: function()
	{
		this.memory[this.memory_pointer] = prompt("Enter a character:").charCodeAt(0);

		/* Increment Instruction Pointer */
		this.instruction_pointer++;		
	},
	
	/**************************************
	End Opcodes
	***************************************/

	executeOperator: function(operator)
	{	
		switch(operator)
		{
			case "+":
				this.operatorIncrementCell();
				break;
			case "-":
				this.operatorDecrementCell();
				break;
			case "<":
				this.operatorCellShiftLeft();
				break;
			case ".":
				this.operatorPrintCell();
				break;
			case ",":
				break;				
			case "[":
				this.operatorBeginLoop();
				break;
			case "]":
				this.operatorEndLoop();
				break;
		}
	},

	executeFrame: function()
	{
	
		/* What's our current operator? */
		var operator = this.program.charAt(this.instruction_pointer);
		
		/* Do it to it */
		this.executeOperator(operator);
	},
	
	execute: function()
	{
		this.clearMemory();

		var oob = this.program.length;
		
		while (this.instruction_pointer < oob)
		{
			console.log(this.program.charAt(this.instruction_pointer));
			this.executeFrame();
		}
	}
};