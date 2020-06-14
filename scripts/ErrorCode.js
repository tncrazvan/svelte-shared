export default function ErrorCode(){}
ErrorCode.inspect=async function(originalInput,callback={error:function(number){},success:function(result){}}){
	let value = parseInt(originalInput);
	const error = !isNaN(value) && value < 0;
	if(error)
		return await callback.error(value);
	else(!error)
		return await callback.success(originalInput);
};
ErrorCode.SIGN_IN_FAILED = -1;
ErrorCode.SESSION_NOT_FOUND = -2;
ErrorCode.DUPLICATE = -3;
ErrorCode.CONSTRAINT_DUPLICATE = -4;