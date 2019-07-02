function unique_string_char(some_string1)
{
 let some_string=some_string1;
 let its_uniql="";
 for (let x=0;x < some_string.length;x++)
 {

 if(its_uniql.indexOf(some_string.charAt(x))==-1)
  {
  its_uniql += some_string[x];  
  
   }
  }
  return its_uniql;  
}  
console.log(unique_string_charchar("thequickbrownfoxjumpsoverthelazydog"));
