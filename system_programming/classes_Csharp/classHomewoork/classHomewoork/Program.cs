using System;

namespace classHomewoork
{
    public class book
    { 
        public string author = "Гордон Д.";
        protected string ID = "231";
        internal int year = 1978;
        private string colorOfCheese = "yellow";
    }
   
    class Program 
    {
        public static void Main(string[] args)
        {
            book book1 = new book();
            Console.WriteLine("Автор:");
            Console.WriteLine(book1.author);
            Console.WriteLine("Год:");
            Console.WriteLine(book1.year);
            Console.ReadKey();
        }
    }
}
