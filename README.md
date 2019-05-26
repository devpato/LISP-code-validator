# LISP-code-validator
This is a LIPS code validator. It checks for balanced parentheses inside of a LISP code.

## View Production Version
https://devpato.github.io/LISP-code-validator/

## Valid parentheses
``(`` and ``)`` 

## Test Examples
``''`` - <strong>true</strong>  <br />
``()`` - <strong>true</strong>  <br />
``)(`` - <strong>false</strong> <br />
``(defun csg-intersection-intersect-all (obj-a obj-b)
   (lambda (ray)
     (flet ((inside-p (obj) (lambda (d) (inside-p obj (ray-point ray d)))))
       (merge 'fvector
              (remove-if-not (inside-p obj-b) (intersect-all obj-a ray))
              (remove-if-not (inside-p obj-a) (intersect-all obj-b ray))
              #'<))))`` - <strong>true</strong>  <br />
              
``(defclass rewindable ()
   ((rewind-store :reader rewind-store
                  :initform make-array 12 :fill-pointer 0 :adjustable t))
    ;; Index is the number of rewinds we've done.
    (rewind-index :accessor rewind-index
                  :initform 0)))
`` - <strong>false</strong> <br />

``(defun last-state (rewindable)
   (let ((size (rewind-count rewindable)))
     (if (zerop size)
         (values nil nil)
         (values (aref (rewind-store rewindable) (1- size)) t))))`` - <strong>true</strong> <br />
``(defun init-mistake-counter (op-str op2)
     ;; Initially, all valid operands are given a mistake count of unity
     ;; (see initial let in closure). However, a subtraction is treated
     ;; specially. In this case, we do not want negative subtractions, so
     ;; we disallow the variable operand to be greater than the first operand.
     ;; The PMF has to be initialised.
     (setf mistake-counter 
 	  (if (string-equal op-str "-")
 	      (loop for y from 0 to 12
 		for x = '(0 . 0)
 		then `(,y . 1) 
 		for z = '(0 . 0)
 		then `(,y . 0)
 		when (< y op2)
 		collect x
 		when (>= y op2)
 		collect z)
 	      mistake-counter)
     (init-pmf)
     (if *debug*
 	(progn 
 	  (format t "mistake-counter : ~a~%" mistake-counter)
 	  (format t "PMF             : ~a~%" pmf))))
`` - <strong>false</strong> <br />
